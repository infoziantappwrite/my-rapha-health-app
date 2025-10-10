import React from 'react';

const Messages_Notes = () => {
  const messages = [
    {
      name: 'Sarah Johnson',
      subject: 'Question about medication timing',
      snippet: 'Hi, I wanted to ask about when I should take...',
      time: '10:30 AM',
      unread: true,
      escalated: false,
    },
    {
      name: 'Mike Chen',
      subject: 'Scheduling follow-up appointment',
      snippet: "Thank you for the consultation. I'd like to...",
      time: '9:15 AM',
      unread: false,
      escalated: false,
    },
    {
      name: 'Emily Davis',
      subject: 'Lab results concern',
      snippet: 'I received my lab results and have some...',
      time: 'Yesterday',
      unread: true,
      escalated: true,
    },
    {
      name: 'James Wilson',
      subject: 'Prescription refill request',
      snippet: 'I need to refill my prescription for...',
      time: 'Yesterday',
      unread: false,
      escalated: false,
    },
    {
      name: 'Anna Martinez',
      subject: 'Side effects question',
      snippet: "I've been experiencing some mild...",
      time: '2 days ago',
      unread: true,
      escalated: false,
    },
    {
      name: 'David Brown',
      subject: 'Appointment confirmation',
      snippet: 'Just confirming my appointment for...',
      time: '2 days ago',
      unread: false,
      escalated: false,
    },
  ];

  const notes = [
    {
      name: 'Sarah Johnson',
      note: 'Discussed medication adherence strategies and timing',
      date: '2024-01-15',
      author: 'Lisa Rodriguez',
    },
    {
      name: 'Mike Chen',
      note: 'Scheduled follow-up appointment for lab review',
      date: '2024-01-14',
      author: 'Sarah Chen',
    },
    {
      name: 'Emily Davis',
      note: 'Reviewed lab results and discussed next steps',
      date: '2024-01-13',
      author: 'Mike Johnson',
    },
    {
      name: 'James Wilson',
      note: 'Patient expressed concerns about side effects',
      date: '2024-01-12',
      author: 'Lisa Rodriguez',
    },
    {
      name: 'Anna Martinez',
      note: 'Updated care plan based on recent symptoms',
      date: '2024-01-11',
      author: 'Sarah Chen',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Messages Panel */}
      <div className="flex-1 rounded-xl shadow-lg p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Messages
          </h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              Templates
            </button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition">
              New Message
            </button>
          </div>
        </div>

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg mb-3 border border-gray-200 dark:border-gray-600 transition-colors duration-200 cursor-pointer ${
              msg.unread ? 'bg-blue-50 dark:bg-blue-900' : 'bg-white dark:bg-gray-700'
            } hover:shadow-md`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <div className="font-semibold text-gray-800 dark:text-gray-100">{msg.name}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{msg.subject}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{msg.snippet}</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{msg.time}</div>
            </div>
            <div className="mt-2 flex gap-2">
              {msg.unread && (
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  Unread
                </span>
              )}
              {msg.escalated && (
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
                  Escalated
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Notes Panel */}
      <div className="w-full md:w-1/3 rounded-xl shadow-lg p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Notes
          </h2>
          <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Add Note
          </button>
        </div>

        {notes.map((note, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 mb-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <div className="font-medium text-gray-800 dark:text-gray-100">{note.name}</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">{note.note}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {note.date} &nbsp;|&nbsp; By {note.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages_Notes;
