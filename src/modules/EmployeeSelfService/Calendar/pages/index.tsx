import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, Plus, Video, Clock, Users, MapPin, ExternalLink, X, CheckCircle2
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import DatePicker from '@/components/ui/date-picker';

export default function CalendarMeetingsPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Q3 Sprint Planning & Roster Review',
      date: '2026-07-28',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      type: 'Internal Sync',
      typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      host: 'Md. Ridoy (Supervisor)',
      location: 'Google Meet',
      link: 'https://meet.google.com/abc-defg-hij',
      attendees: 'Development Team (6 members)'
    },
    {
      id: 2,
      title: 'ERP Frontend UI Review with Product Lead',
      date: '2026-07-29',
      startTime: '02:30 PM',
      endTime: '03:30 PM',
      type: 'Design Review',
      typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      host: 'Md. Kamruzzaman',
      location: 'Conference Room 2B',
      link: '',
      attendees: 'UI/UX & Laravel Devs'
    },
    {
      id: 3,
      title: 'Monthly HR All-Hands & Policy Q&A',
      date: '2026-07-31',
      startTime: '04:00 PM',
      endTime: '05:00 PM',
      type: 'Company Event',
      typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      host: 'HR Department',
      location: 'Main Auditorium',
      link: '',
      attendees: 'All Employees'
    }
  ]);

  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '2026-07-30',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    location: 'Google Meet',
    link: '',
    attendees: ''
  });

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMeeting.title) {
      alert('Please enter meeting title.');
      return;
    }

    setMeetings([
      {
        id: Date.now(),
        title: newMeeting.title,
        date: newMeeting.date,
        startTime: newMeeting.startTime,
        endTime: newMeeting.endTime,
        type: 'Scheduled Meeting',
        typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        host: 'Al Mamon',
        location: newMeeting.location || 'Online',
        link: newMeeting.link || 'https://meet.google.com',
        attendees: newMeeting.attendees || 'Invited Team'
      },
      ...meetings
    ]);

    setIsMeetingModalOpen(false);
    setNewMeeting({
      title: '',
      date: '2026-07-30',
      startTime: '11:00 AM',
      endTime: '12:00 PM',
      location: 'Google Meet',
      link: '',
      attendees: ''
    });
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-[1520px] mx-auto p-4 bg-[#f8fafc] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-16">
      
      {/* PAGE HEADER & ACTION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <CalendarIcon size={20} className="text-[#008060]" />
            <span>Calendar & Meetings</span>
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            Schedule meetings, set work reminders, and keep track of upcoming team appointments.
          </p>
        </div>

        <Button
          onClick={() => setIsMeetingModalOpen(true)}
          className="bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold px-3 h-8 rounded-md transition-colors uppercase tracking-wider shadow-2xs cursor-pointer flex items-center gap-1.5 shrink-0"
        >
          <Plus size={15} />
          <span>Schedule Meeting</span>
        </Button>
      </div>

      {/* SPLIT VIEW: FULL CALENDAR GRID (8 Cols) + UPCOMING MEETINGS (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        
        {/* CALENDAR GRID CARD */}
        <div className="lg:col-span-8 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-3">
          
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <h3 className="text-[14px] font-bold text-slate-900">July 2026</h3>
            </div>

            <div className="flex items-center gap-2">
              <DatePicker size="sm" variant="compact" format="monthYear" className="w-[130px]" placeholder="July 2026" />
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 text-center font-bold text-[11px] text-slate-500">
            <div className="py-1 bg-slate-50 rounded">Sun</div>
            <div className="py-1 bg-slate-50 rounded">Mon</div>
            <div className="py-1 bg-slate-50 rounded">Tue</div>
            <div className="py-1 bg-slate-50 rounded">Wed</div>
            <div className="py-1 bg-slate-50 rounded">Thu</div>
            <div className="py-1 bg-slate-50 rounded">Fri</div>
            <div className="py-1 bg-slate-50 rounded">Sat</div>
          </div>

          {/* Calendar Month Grid */}
          <div className="grid grid-cols-7 gap-1 text-left">
            {/* Empty Offset Days */}
            <div className="min-h-[58px] p-1 border border-slate-100 rounded bg-slate-50/50" />
            <div className="min-h-[58px] p-1 border border-slate-100 rounded bg-slate-50/50" />
            <div className="min-h-[58px] p-1 border border-slate-100 rounded bg-slate-50/50" />

            {calendarDays.map((dayNum) => {
              const dayString = `2026-07-${dayNum < 10 ? '0' + dayNum : dayNum}`;
              const dayMeetings = meetings.filter(m => m.date === dayString);
              const isToday = dayNum === 27;

              return (
                <div 
                  key={dayNum} 
                  className={`min-h-[58px] p-1 border rounded transition-colors flex flex-col justify-between ${
                    isToday ? 'border-[#008060] bg-emerald-50/30' : 'border-slate-200/70 bg-white hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold ${isToday ? 'text-white bg-[#008060] px-1 py-0.2 rounded-full text-[9.5px]' : 'text-slate-700'}`}>
                      {dayNum}
                    </span>
                    {dayMeetings.length > 0 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title={`${dayMeetings.length} Meeting(s)`} />
                    )}
                  </div>

                  <div className="space-y-0.5 mt-0.5">
                    {dayMeetings.map((m) => (
                      <div 
                        key={m.id} 
                        className="p-0.5 rounded text-[8.5px] font-bold bg-emerald-100 text-emerald-800 truncate border border-emerald-200"
                        title={`${m.startTime} - ${m.title}`}
                      >
                        {m.startTime} {m.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* UPCOMING MEETINGS CARDS (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-[14px] font-bold text-slate-900">Upcoming Meetings</h3>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              {meetings.length} Events
            </span>
          </div>

          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
            {meetings.map((item) => (
              <div 
                key={item.id} 
                className="p-2.5 bg-slate-50/80 border border-slate-200/80 rounded-lg space-y-1.5 hover:border-[#008060] transition-colors"
              >
                <div className="flex items-start justify-between gap-1.5">
                  <h4 className="text-[12px] font-bold text-slate-900 leading-snug">{item.title}</h4>
                  <span className={`text-[9.5px] font-extrabold px-1.5 py-0.2 rounded border shrink-0 ${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>

                <div className="space-y-0.5 text-[11px] text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-slate-400 shrink-0" />
                    <span>{item.date} • {item.startTime} - {item.endTime}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Users size={12} className="text-slate-400 shrink-0" />
                    <span>Host: <strong className="text-slate-800">{item.host}</strong></span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {item.link && (
                  <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-end">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10.5px] font-bold text-white bg-[#008060] hover:bg-[#006e52] px-2.5 py-0.5 rounded transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <Video size={12} />
                      <span>Join Meeting</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SCHEDULE MEETING MODAL */}
      {isMeetingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#008060] flex items-center justify-center font-bold">
                  <CalendarIcon size={18} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 leading-tight">Schedule New Meeting</h3>
                  <p className="text-[11.5px] text-slate-500 font-medium">Create a meeting event or team appointment</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMeetingModalOpen(false)} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleScheduleMeeting} className="p-5 space-y-3 text-left">
              <div>
                <Input 
                  label="Meeting Subject / Title"
                  placeholder="e.g., Weekly Team Sync"
                  value={newMeeting.title}
                  onChange={(e) => setNewMeeting({ ...newMeeting, title: e.target.value })}
                  className="h-8 text-[12px]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <DatePicker 
                  label="Date"
                  value={newMeeting.date}
                  onChange={(val) => setNewMeeting({ ...newMeeting, date: val })}
                />

                <Input 
                  label="Start Time"
                  placeholder="10:00 AM"
                  value={newMeeting.startTime}
                  onChange={(e) => setNewMeeting({ ...newMeeting, startTime: e.target.value })}
                  className="h-8 text-[12px]"
                />

                <Input 
                  label="End Time"
                  placeholder="11:00 AM"
                  value={newMeeting.endTime}
                  onChange={(e) => setNewMeeting({ ...newMeeting, endTime: e.target.value })}
                  className="h-8 text-[12px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <Input 
                  label="Location / Platform"
                  placeholder="Google Meet / Room A"
                  value={newMeeting.location}
                  onChange={(e) => setNewMeeting({ ...newMeeting, location: e.target.value })}
                  className="h-8 text-[12px]"
                />

                <Input 
                  label="Meeting URL Link"
                  placeholder="https://meet.google.com/..."
                  value={newMeeting.link}
                  onChange={(e) => setNewMeeting({ ...newMeeting, link: e.target.value })}
                  className="h-8 text-[12px]"
                />
              </div>

              <div>
                <Input 
                  label="Attendees / Participants"
                  placeholder="e.g. Ridoy, Kamruzzaman, Development Team"
                  value={newMeeting.attendees}
                  onChange={(e) => setNewMeeting({ ...newMeeting, attendees: e.target.value })}
                  className="h-8 text-[12px]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsMeetingModalOpen(false)}
                  className="px-3.5 py-1.5 text-[11.5px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-3.5 py-1.5 text-[11.5px] font-bold text-white bg-[#008060] hover:bg-[#006e52] rounded transition-colors shadow-2xs flex items-center gap-1 cursor-pointer"
                >
                  <CheckCircle2 size={14} />
                  <span>Save Event</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
