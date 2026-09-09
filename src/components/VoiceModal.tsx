import React, { useState, useEffect } from 'react';
import { X, Mic, MicOff, Volume2, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
  onTranscriptSubmitted: (spokenText: string) => void;
}

export type VoiceState = 'ready' | 'listening' | 'processing' | 'answering';

export const VoiceModal: React.FC<VoiceModalProps> = ({
  isOpen,
  onClose,
  language,
  onTranscriptSubmitted,
}) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('ready');
  const [transcript, setTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const langObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    if (isOpen) {
      setVoiceState('ready');
      setTranscript('');
      setErrorMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startListening = () => {
    setErrorMessage(null);
    setVoiceState('listening');
    setTranscript('');

    // Check for web speech recognition API
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.lang = langObj.speechCode;
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setTranscript(currentTranscript);
        };

        recognition.onerror = (e: any) => {
          console.warn('Speech recognition error:', e.error);
          fallbackSimulation();
        };

        recognition.onend = () => {
          if (transcript) {
            setVoiceState('processing');
            setTimeout(() => {
              onTranscriptSubmitted(transcript);
              onClose();
            }, 600);
          } else {
            fallbackSimulation();
          }
        };

        recognition.start();
        return;
      } catch (err) {
        console.warn('Speech recognition failed to start:', err);
      }
    }

    fallbackSimulation();
  };

  const fallbackSimulation = () => {
    // Realistic simulation for environments/browsers without live microphone permissions
    const demoPhrases: Record<LanguageCode, string> = {
      hi: 'PACS में सदस्य कैसे बनें और क्या क्या दस्तावेज लगेंगे?',
      en: 'How can I become a PACS member and what documents are required?',
      bn: 'আমার ফসলের ক্ষয়ক্ষতি হলে PMFBY বীমা কীভাবে পাব?',
      mr: 'पॅक्समध्ये सभासद होण्यासाठी काय पात्रता आणि कागदपत्रे लागतात?',
      ta: 'PMFBY திட்டத்திற்கு நான் எவ்வாறு பயிர் காப்பீடு பெறுவது?',
      te: 'PACS లో సభ్యునిగా చేరడానికి అవసరమైన పత్రాలు ఏమిటి?',
      gu: 'પેક્સમાં સભ્ય બનવા માટે કયા કયા દસ્તાવેજો જોઈએ?',
      kn: 'ಪ್ಯಾಕ್ಸ್‌ನಲ್ಲಿ ಸದಸ್ಯರಾಗಲು ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?'
    };

    const targetPhrase = demoPhrases[language] || demoPhrases.hi;

    let current = '';
    const words = targetPhrase.split(' ');
    let wordIdx = 0;

    const interval = setInterval(() => {
      if (wordIdx < words.length) {
        current += (wordIdx === 0 ? '' : ' ') + words[wordIdx];
        setTranscript(current);
        wordIdx++;
      } else {
        clearInterval(interval);
        setVoiceState('processing');
        setTimeout(() => {
          onTranscriptSubmitted(targetPhrase);
          onClose();
        }, 800);
      }
    }, 280);
  };

  const handleStopListening = () => {
    if (transcript.trim()) {
      setVoiceState('processing');
      setTimeout(() => {
        onTranscriptSubmitted(transcript);
        onClose();
      }, 500);
    } else {
      setVoiceState('ready');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-center p-6 space-y-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
            <span>{langObj.flag}</span>
            <span>Spoken Language: {langObj.nativeLabel}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">Voice Assistant</h3>
          <p className="text-xs text-slate-500 mt-1">
            Speak naturally in {langObj.label} or Indian rural dialects
          </p>
        </div>

        {/* Microphone Button & Waveform */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative">
            {voiceState === 'listening' && (
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full animate-ping" />
            )}
            <button
              onClick={voiceState === 'listening' ? handleStopListening : startListening}
              className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                voiceState === 'listening'
                  ? 'bg-emerald-600 text-white scale-105 ring-4 ring-emerald-300'
                  : voiceState === 'processing'
                  ? 'bg-blue-600 text-white animate-pulse'
                  : 'bg-slate-900 hover:bg-slate-800 text-white hover:scale-105'
              }`}
            >
              {voiceState === 'listening' ? (
                <Mic className="w-10 h-10 animate-bounce" />
              ) : voiceState === 'processing' ? (
                <Sparkles className="w-10 h-10 animate-spin" />
              ) : (
                <Mic className="w-10 h-10" />
              )}
            </button>
          </div>

          {/* Soundwave Bars */}
          {voiceState === 'listening' ? (
            <div className="flex items-center gap-1.5 h-10 mt-6">
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-1" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-2" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-3" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-4" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-5" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-2" />
              <span className="w-1.5 bg-emerald-600 rounded-full animate-wave-1" />
            </div>
          ) : (
            <div className="h-10 mt-6 flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {voiceState === 'ready' && 'Tap microphone to start speaking'}
              {voiceState === 'processing' && 'Processing speech & retrieving official source...'}
              {voiceState === 'answering' && 'Generating answer...'}
            </div>
          )}
        </div>

        {/* Live Transcript Box */}
        <div className="min-h-[70px] bg-slate-50 p-4 rounded-2xl border border-slate-200 text-sm text-slate-800 flex items-center justify-center">
          {transcript ? (
            <p className="font-medium text-slate-900 leading-relaxed italic">
              “{transcript}”
            </p>
          ) : (
            <span className="text-slate-400 text-xs">
              {voiceState === 'listening' ? 'Listening to your voice...' : 'Say your question clearly...'}
            </span>
          )}
        </div>

        {/* Action button */}
        {voiceState === 'listening' && (
          <button
            onClick={handleStopListening}
            className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Finished Speaking — Ask AI
          </button>
        )}
      </div>
    </div>
  );
};
