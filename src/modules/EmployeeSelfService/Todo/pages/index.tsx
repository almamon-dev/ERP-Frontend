import React, { useState } from 'react';
import { 
  CheckSquare, Plus, Trash2, CheckCircle2, Circle, Search, Filter
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import DatePicker from '@/components/ui/date-picker';

export default function TodoListPage() {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('2026-07-30');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Work Task');
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Complete ERP Employee Self Service UI components',
      dueDate: '2026-07-28',
      priority: 'High',
      priorityBadge: 'bg-rose-50 text-rose-700 border-rose-200',
      category: 'Work Task',
      completed: false,
      createdAt: '26 Jul, 2026'
    },
    {
      id: 2,
      title: 'Submit July Monthly Attendance Adjustment Requisition',
      dueDate: '2026-07-29',
      priority: 'High',
      priorityBadge: 'bg-rose-50 text-rose-700 border-rose-200',
      category: 'HR Requisition',
      completed: false,
      createdAt: '25 Jul, 2026'
    },
    {
      id: 3,
      title: 'Prepare Sprint Review Demo Slides for Team Lead',
      dueDate: '2026-07-30',
      priority: 'Medium',
      priorityBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      category: 'Meeting Prep',
      completed: true,
      createdAt: '24 Jul, 2026'
    },
    {
      id: 4,
      title: 'Review Company Code of Conduct & Security Policy',
      dueDate: '2026-08-01',
      priority: 'Low',
      priorityBadge: 'bg-blue-50 text-blue-700 border-blue-200',
      category: 'Compliance',
      completed: true,
      createdAt: '20 Jul, 2026'
    }
  ]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      alert('Please enter a task title.');
      return;
    }

    const priorityBadge = priority === 'High' 
      ? 'bg-rose-50 text-rose-700 border-rose-200' 
      : priority === 'Medium'
        ? 'bg-amber-50 text-amber-700 border-amber-200'
        : 'bg-blue-50 text-blue-700 border-blue-200';

    const newTodo = {
      id: Date.now(),
      title: taskTitle,
      dueDate: dueDate,
      priority: priority,
      priorityBadge: priorityBadge,
      category: category,
      completed: false,
      createdAt: '27 Jul, 2026'
    };

    setTodos([newTodo, ...todos]);
    setTaskTitle('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      setTodos(todos.filter(t => t.id !== id));
    }
  };

  const filteredTodos = todos.filter(t => {
    if (activeFilter === 'pending' && t.completed) return false;
    if (activeFilter === 'completed' && !t.completed) return false;
    if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-[1520px] mx-auto p-4 bg-[#f8fafc] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-16">
      
      {/* PAGE TITLE */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[17px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <CheckSquare size={18} className="text-[#008060]" />
            <span>Todo List & Tasks</span>
          </h1>
          <p className="text-[11.5px] font-medium text-slate-500">
            Create, track, and manage your personal daily work items and task priorities.
          </p>
        </div>
      </div>

      {/* COMPACT INPUT FORM CARD */}
      <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-3">
        <form onSubmit={handleAddTodo} className="space-y-2.5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-end">
            
            <div className="md:col-span-5">
              <Input 
                label="Task Description"
                placeholder="What needs to be done?"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="h-8 text-[12px]"
              />
            </div>

            <div className="md:col-span-2">
              <DatePicker 
                label="Target Due Date"
                value={dueDate}
                onChange={(val) => setDueDate(val)}
                className="w-full h-8 text-[12px]"
              />
            </div>

            <div className="md:col-span-2">
              <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-1">Priority</FormLabel>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                options={[
                  { id: 'High', name: 'High' },
                  { id: 'Medium', name: 'Medium' },
                  { id: 'Low', name: 'Low' },
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-1">Category</FormLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                options={[
                  { id: 'Work Task', name: 'Work Task' },
                  { id: 'HR Requisition', name: 'HR Requisition' },
                  { id: 'Meeting Prep', name: 'Meeting Prep' },
                  { id: 'Compliance', name: 'Compliance' },
                ]}
              />
            </div>

            <div className="md:col-span-1">
              <Button
                type="submit"
                className="w-full bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-bold h-8 rounded transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-1"
              >
                <Plus size={14} />
                <span>Add</span>
              </Button>
            </div>

          </div>
        </form>
      </div>

      {/* COMPACT DATA TABLE & FILTER BAR CARD */}
      <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-3">
        
        {/* Compact Filter Pills & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
          
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-0.5 text-[11px] font-bold rounded transition-colors cursor-pointer ${activeFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All ({todos.length})
            </button>

            <button
              onClick={() => setActiveFilter('pending')}
              className={`px-2.5 py-0.5 text-[11px] font-bold rounded transition-colors cursor-pointer ${activeFilter === 'pending' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Pending ({todos.filter(t => !t.completed).length})
            </button>

            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-2.5 py-0.5 text-[11px] font-bold rounded transition-colors cursor-pointer ${activeFilter === 'completed' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Completed ({todos.filter(t => t.completed).length})
            </button>
          </div>

          <div className="relative w-full sm:w-56">
            <input 
              type="text" 
              placeholder="Search task title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-7 px-2.5 pr-7 text-[11.5px] border border-slate-200 rounded outline-none focus:border-[#008060] font-medium bg-slate-50 focus:bg-white"
            />
            <Search size={13} className="absolute right-2 top-1.5 text-slate-400 pointer-events-none" />
          </div>

        </div>

        {/* HIGH DENSITY COMPACT TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold text-[11px]">
                <th className="py-1.5 px-2 border-r border-slate-200 text-center w-10">Status</th>
                <th className="py-1.5 px-2.5 border-r border-slate-200">Task Title</th>
                <th className="py-1.5 px-2.5 border-r border-slate-200 w-36">Category</th>
                <th className="py-1.5 px-2 border-r border-slate-200 text-center w-24">Priority</th>
                <th className="py-1.5 px-2.5 border-r border-slate-200 text-center w-28">Due Date</th>
                <th className="py-1.5 px-2 text-center w-12">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
              {filteredTodos.length > 0 ? (
                filteredTodos.map((item) => (
                  <tr key={item.id} className={`hover:bg-slate-50/80 transition-colors ${item.completed ? 'bg-slate-50/40 opacity-70' : ''}`}>
                    
                    <td className="py-1.5 px-2 border-r border-slate-200 text-center">
                      <button 
                        onClick={() => toggleTodo(item.id)}
                        className="text-slate-400 hover:text-[#008060] transition-colors cursor-pointer flex items-center justify-center mx-auto"
                        title={item.completed ? 'Mark Incomplete' : 'Mark Complete'}
                      >
                        {item.completed ? (
                          <CheckCircle2 size={16} className="text-[#008060]" />
                        ) : (
                          <Circle size={16} />
                        )}
                      </button>
                    </td>

                    <td className="py-1.5 px-2.5 border-r border-slate-200 font-bold text-slate-900">
                      <span className={item.completed ? 'line-through text-slate-400 font-normal' : ''}>
                        {item.title}
                      </span>
                    </td>

                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-600">
                      <span className="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded text-[10.5px] font-semibold border border-slate-200/60">
                        {item.category}
                      </span>
                    </td>

                    <td className="py-1.5 px-2 border-r border-slate-200 text-center">
                      <span className={`px-1.5 py-0.2 text-[10px] font-bold rounded border ${item.priorityBadge}`}>
                        {item.priority}
                      </span>
                    </td>

                    <td className="py-1.5 px-2.5 border-r border-slate-200 text-center font-bold text-slate-800 text-[11.5px] whitespace-nowrap">
                      {item.dueDate}
                    </td>

                    <td className="py-1.5 px-2 text-center">
                      <button 
                        onClick={() => deleteTodo(item.id)}
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer mx-auto"
                        title="Delete Task"
                      >
                        <Trash2 size={12} />
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-slate-400 font-medium">
                    No tasks found matching your filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
