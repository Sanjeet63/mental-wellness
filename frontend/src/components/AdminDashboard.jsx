import React, { useState, useEffect } from "react";
import { Calendar, User, Mail, Phone, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react";

const AdminDashboard = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      // This will be replaced with actual API call
      const response = await fetch('https://mental-wellness-thzb.onrender.com/api/admin/consultations');
      const data = await response.json();
      setConsultations(data);
    } catch (error) {
      console.error('Error fetching consultations:', error);
      // For now, show sample data
      setConsultations([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+1234567890",
          consultationType: "Mental Health Counseling",
          preferredDate: "2025-09-10",
          preferredTime: "14:00",
          message: "I need help with anxiety management",
          status: "pending",
          createdAt: "2025-09-06T08:00:00Z"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+0987654321",
          consultationType: "Stress Management",
          preferredDate: "2025-09-12",
          preferredTime: "10:00",
          message: "Work-related stress issues",
          status: "confirmed",
          createdAt: "2025-09-05T15:30:00Z"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateConsultationStatus = async (id, status) => {
    try {
      // This will be replaced with actual API call
      const response = await fetch(`https://mental-wellness-thzb.onrender.com/api/admin/consultations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        setConsultations(consultations.map(consultation =>
          consultation.id === id ? { ...consultation, status } : consultation
        ));
      }
    } catch (error) {
      console.error('Error updating consultation:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  if (loading) {
    return (
      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 overflow-y-auto">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-700">
            Admin Dashboard
          </h1>
          <div className="text-sm text-gray-600">
            Total Consultations: {consultations.length}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {consultations.filter(c => c.status === 'pending').length}
            </div>
            <div className="text-sm text-yellow-800">Pending</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {consultations.filter(c => c.status === 'confirmed').length}
            </div>
            <div className="text-sm text-green-800">Confirmed</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {consultations.filter(c => c.status === 'completed').length}
            </div>
            <div className="text-sm text-blue-800">Completed</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {consultations.filter(c => c.status === 'cancelled').length}
            </div>
            <div className="text-sm text-red-800">Cancelled</div>
          </div>
        </div>

        {/* Consultations Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Client</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Date & Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-purple-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consultation) => (
                <tr key={consultation.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">{consultation.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {consultation.email}
                        </div>
                        {consultation.phone && (
                          <div className="text-sm text-gray-500 flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {consultation.phone}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{consultation.consultationType}</div>
                    {consultation.message && (
                      <div className="text-xs text-gray-500 mt-1 flex items-start">
                        <MessageSquare className="w-3 h-3 mr-1 mt-0.5" />
                        <span className="line-clamp-2">{consultation.message}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {new Date(consultation.preferredDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {consultation.preferredTime}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(consultation.status)}`}>
                      {getStatusIcon(consultation.status)}
                      <span className="ml-1 capitalize">{consultation.status}</span>
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex space-x-2">
                      {consultation.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateConsultationStatus(consultation.id, 'confirmed')}
                            className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => updateConsultationStatus(consultation.id, 'cancelled')}
                            className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {consultation.status === 'confirmed' && (
                        <button
                          onClick={() => updateConsultationStatus(consultation.id, 'completed')}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {consultations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No consultation requests yet</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;