'use client';

import React, { useState, useEffect } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'rooftop' | 'poolside' | 'indoor'>('rooftop');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState<string>('');

  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
    setMinDate(today);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const seatingLabels = {
      rooftop: '🌙 Rooftop Under The Stars',
      poolside: '🏊 Poolside Lounge',
      indoor: '🏠 Indoor AC Seating',
    };

    const lines = [
      '🍽️ *Table Reservation Request — The Time Out*',
      '',
      `👤 *Name:* ${name || 'Guest'}`,
      `📞 *Phone:* ${phone || 'Not provided'}`,
      `📅 *Date:* ${date}`,
      `⏰ *Time:* ${time}`,
      `👥 *Guests:* ${guests} Persons`,
      `📍 *Preferred Seating:* ${seatingLabels[seatingArea]}`,
    ];

    if (specialRequests.trim()) {
      lines.push(`💬 *Special Request:* ${specialRequests}`);
    }

    lines.push('', 'Please confirm table availability. Thank you!');

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/917023399845?text=${text}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
      onClose();
    }, 400);
  };

  const seatingOptions = [
    { id: 'rooftop', label: 'Rooftop', icon: '🌙', desc: 'Breezy & Open Sky' },
    { id: 'poolside', label: 'Poolside', icon: '🏊', desc: 'Chill Pool View' },
    { id: 'indoor', label: 'Indoor', icon: '🏠', desc: 'Air Conditioned' },
  ] as const;

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
    '10:00 PM',
    '10:30 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl border-[2px] border-[#141413] shadow-[6px_8px_0px_#141413] z-10 max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#141413]/10 flex items-center justify-between bg-[#FAF2E1]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5C242] border border-[#141413] text-[10px] font-black uppercase text-[#141413]">
              <span>⭐</span>
              <span>Reserve Table</span>
            </div>
            <h3 className="font-display text-2xl font-black text-[#141413] mt-0.5 tracking-tight">
              BOOK YOUR TABLE
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#141413] bg-white flex items-center justify-center text-[#141413] font-black text-sm hover:bg-[#E14825] hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          {/* Seating Area Selection */}
          <div>
            <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-2">
              1. Choose Seating Area <span className="text-[#E14825]">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {seatingOptions.map((opt) => {
                const isSelected = seatingArea === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSeatingArea(opt.id)}
                    className={`p-3 rounded-2xl border-[1.5px] text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'border-[#141413] bg-[#E14825] text-white shadow-[2px_2px_0px_#141413]'
                        : 'border-[#141413]/30 bg-white text-[#141413] hover:bg-[#FAF2E1]'
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-bold text-xs">{opt.label}</span>
                    <span
                      className={`text-[10px] ${
                        isSelected ? 'text-white/80' : 'text-[#5A5751]'
                      }`}
                    >
                      {opt.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date, Time & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Date */}
            <div>
              <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
                Date <span className="text-[#E14825]">*</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={minDate || undefined}
                className="w-full h-11 px-3 rounded-xl border-[1.5px] border-[#141413] bg-white text-xs font-semibold text-[#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40"
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
                Time <span className="text-[#E14825]">*</span>
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border-[1.5px] border-[#141413] bg-white text-xs font-semibold text-[#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
                Guests <span className="text-[#E14825]">*</span>
              </label>
              <div className="flex items-center h-11 rounded-xl border-[1.5px] border-[#141413] bg-white px-2 justify-between">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-lg border border-[#141413] flex items-center justify-center font-bold text-xs hover:bg-[#FAF2E1]"
                >
                  -
                </button>
                <span className="font-display font-black text-sm text-[#141413]">
                  {guests} {guests === 1 ? 'Guest' : 'Guests'}
                </span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(20, g + 1))}
                  className="w-7 h-7 rounded-lg border border-[#141413] flex items-center justify-center font-bold text-xs hover:bg-[#FAF2E1]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#141413]/10">
            <div>
              <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
                Your Name <span className="text-[#E14825]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border-[1.5px] border-[#141413] bg-white text-xs font-semibold text-[#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
                Phone Number <span className="text-[#E14825]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border-[1.5px] border-[#141413] bg-white text-xs font-semibold text-[#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-black uppercase text-[#141413] tracking-wider mb-1.5">
              Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Birthday celebration, poolside corner table, extra chairs..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full p-3 rounded-xl border-[1.5px] border-[#141413] bg-white text-xs font-semibold text-[#141413] focus:outline-none focus:ring-2 focus:ring-[#E14825]/40 resize-none"
            />
          </div>

          {/* Confirmation Notes */}
          <div className="bg-[#FAF2E1] border border-[#141413]/20 rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#5A5751]">
            <span className="text-base text-[#108548]">✓</span>
            <div>
              <strong className="text-[#141413]">Instant WhatsApp Confirmation:</strong> We will confirm your table booking right on WhatsApp with zero reservation fees.
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full btn-base bg-[#25D366] text-white border-[1.5px] border-[#141413] shadow-[3px_4px_0px_#141413] py-3.5 text-sm font-black flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
          >
            <span>💬</span>
            <span>{submitted ? 'Opening WhatsApp...' : 'Confirm Reservation on WhatsApp'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
