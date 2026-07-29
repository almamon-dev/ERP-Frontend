import React, { useState } from 'react';
import { 
  CheckSquare, Plus, Trash2, CheckCircle2, Circle, Search, Filter,
  ListTodo, Clock, AlertTriangle, CheckCheck, Tag
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
      alert('Please enter a task description.');
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

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.filter(t => !t.completed).length;
  const highPriorityCount = todos.filter(t => t.priority === 'High' && !t.completed).length;
  const completionPercentage = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  return (
    <div className="p-4 w-full max-w-none mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & DESCRIPTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <CheckSquare size={20} className="text-[#008060]" />
            <span>Todo List & Tasks</span>
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            Create, track, and manage your personal daily work items and task priorities.
          </p>
        </div>

        {/* METRIC COUNTER BADGES */}
        <div className="flex items-center gap-3 font-normal text-[13px]">
          <div className="flex items-stretch border-l-[3px] border-emerald-500 pl-2.5 text-left py-0.5">
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-slate-800 leading-none">{completedCount}/{todos.length}</span>
              <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">Completed ({completionPercentage}%)</span>
            </div>
          </div>

          <div className="flex items-stretch border-l-[3px] border-amber-500 pl-2.5 text-left py-0.5">
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] text-amber-600 leading-none">{pendingCount}</span>
              <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">Pending</span>
            </div>
          </div>

          {highPriorityCount > 0 && (
            <div className="flex items-stretch border-l-[3px] border-rose-500 pl-2.5 text-left py-0.5 hidden sm:flex">
              <div className="flex flex-col">
                <span className="font-extrabold text-[15px] text-rose-600 leading-none">{highPriorityCount}</span>
                <span className="text-[#64748b] text-[11px] font-medium leading-none mt-1">High Priority</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MAIN 2-COLUMN LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        
        {/* LEFT COLUMN (4 COLS): ADD TASK FORM & PROGRESS */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* CREATE TASK FORM CARD */}
          <div className="bg-white p-4 rounded-sm border border-slate-200 shadow-2xs space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-[13.5px] font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                <Plus size={16} className="text-[#008060]" />
                <span>Create New Task</span>
              </h2>
              <span className="text-[11px] font-semibold text-slate-400">Quick Add</span>
            </div>

            <form onSubmit={handleAddTodo} className="space-y-3">
              <div className="flex flex-col gap-1 w-full">
                <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                  <span className="text-rose-500 mr-0.5">*</span> Task Description
                </FormLabel>
                <Input 
                  placeholder="What needs to be done?"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="text-[12px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Category
                  </FormLabel>
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

                <div className="flex flex-col gap-1 w-full">
                  <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                    <span className="text-rose-500 mr-0.5">*</span> Priority
                  </FormLabel>
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
              </div>

              <div className="flex flex-col gap-1 w-full">
                <FormLabel className="text-[11.5px] font-bold text-slate-700 !mb-0">
                  <span className="text-rose-500 mr-0.5">*</span> Target Due Date
                </FormLabel>
                <DatePicker 
                  value={dueDate}
                  onChange={(val) => setDueDate(val)}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 rounded-sm transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-1.5 mt-1"
              >
                <Plus size={15} />
                <span>Add Task to List</span>
              </Button>
            </form>
          </div>

          {/* PROGRESS SUMMARY CARD */}
          <div className="bg-white p-3.5 rounded-sm border border-slate-200 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between text-[12px] font-bold text-slate-800">
              <span>Task Completion Progress</span>
              <span className="text-[#008060] font-extrabold">{completionPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#008060] transition-all duration-300 rounded-full" 
                style={{ width: `${completionPercentage}%` }} 
              />
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {completedCount} of {todos.length} tasks completed. Keep up the momentum!
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN (8 COLS): TASK LIST TABLE */}
        <div className="lg:col-span-8 bg-white p-3.5 sm:p-4 rounded-sm border border-slate-200 shadow-2xs space-y-3">
          
          {/* FILTER TABS & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
            
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-sm border border-slate-200/60">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-[11.5px] font-bold rounded-sm transition-all cursor-pointer ${activeFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
              >
                All ({todos.length})
              </button>

              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-3 py-1 text-[11.5px] font-bold rounded-sm transition-all cursor-pointer ${activeFilter === 'pending' ? 'bg-white text-amber-700 shadow-2xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Pending ({todos.filter(t => !t.completed).length})
              </button>

              <button
                onClick={() => setActiveFilter('completed')}
                className={`px-3 py-1 text-[11.5px] font-bold rounded-sm transition-all cursor-pointer ${activeFilter === 'completed' ? 'bg-white text-emerald-700 shadow-2xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Completed ({todos.filter(t => t.completed).length})
              </button>
            </div>

            <div className="relative w-full sm:w-60">
              <input 
                type="text" 
                placeholder="Search task title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-200 rounded-sm outline-none focus:border-[#008060] font-medium bg-slate-50 focus:bg-white"
              />
              <Search size={14} className="absolute right-2.5 top-2 text-slate-400 pointer-events-none" />
            </div>

          </div>

          {/* HIGH DENSITY DATA TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-slate-200 text-slate-800 font-bold">
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center w-10">Status</th>
                  <th className="py-2 px-3 border-r border-slate-200">Task Title</th>
                  <th className="py-2 px-3 border-r border-slate-200 w-36">Category</th>
                  <th className="py-2 px-2.5 border-r border-slate-200 text-center w-24">Priority</th>
                  <th className="py-2 px-3 border-r border-slate-200 text-center w-28">Due Date</th>
                  <th className="py-2 px-2 text-center w-12">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                {filteredTodos.length > 0 ? (
                  filteredTodos.map((item) => (
                    <tr key={item.id} className={`hover:bg-slate-50/80 transition-colors ${item.completed ? 'bg-slate-50/50 opacity-75' : ''}`}>
                      
                      <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                        <button 
                          onClick={() => toggleTodo(item.id)}
                          className="text-slate-400 hover:text-[#008060] transition-colors cursor-pointer flex items-center justify-center mx-auto"
                          title={item.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        >
                          {item.completed ? (
                            <CheckCircle2 size={17} className="text-[#008060]" />
                          ) : (
                            <Circle size={17} />
                          )}
                        </button>
                      </td>

                      <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900">
                        <span className={item.completed ? 'line-through text-slate-400 font-normal' : ''}>
                          {item.title}
                        </span>
                      </td>

                      <td className="py-2 px-3 border-r border-slate-200 text-slate-600">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm text-[11px] font-semibold border border-slate-200/80 inline-block">
                          {item.category}
                        </span>
                      </td>

                      <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                        <span className={`px-2 py-0.5 text-[10.5px] font-bold rounded-sm border inline-block ${item.priorityBadge}`}>
                          {item.priority}
                        </span>
                      </td>

                      <td className="py-2 px-3 border-r border-slate-200 text-center font-bold text-slate-800 text-[11.5px] whitespace-nowrap">
                        {item.dueDate}
                      </td>

                      <td className="py-2 px-2 text-center">
                        <button 
                          onClick={() => deleteTodo(item.id)}
                          className="w-6.5 h-6.5 rounded-sm bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer mx-auto"
                          title="Delete Task"
                        >
                          <Trash2 size={13} />
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400 font-medium">
                      No tasks found matching your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
