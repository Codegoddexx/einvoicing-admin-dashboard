export const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+234 801 234 5678",
    status: "active",
    industry: "Technology",
    dateOnboarded: "2024-01-15",
    totalInvoices: 45,
    totalRevenue: "₦12,500,000",
    contactPerson: "John Doe",
    address: "15 Marina Road, Lagos Island, Lagos"
  },
  {
    id: 2,
    name: "GlobalTech Solutions",
    email: "info@globaltech.com",
    phone: "+234 802 345 6789",
    status: "active",
    industry: "Software",
    dateOnboarded: "2024-02-20",
    totalInvoices: 32,
    totalRevenue: "₦8,750,000",
    contactPerson: "Jane Smith",
    address: "23 Awolowo Road, Ikoyi, Lagos"
  },
  {
    id: 3,
    name: "Enterprise Systems Ltd",
    email: "admin@enterprise.com",
    phone: "+234 803 456 7890",
    status: "inactive",
    industry: "Consulting",
    dateOnboarded: "2023-11-10",
    totalInvoices: 18,
    totalRevenue: "₦5,200,000",
    contactPerson: "Michael Johnson",
    address: "7 Oyin Jolayemi Street, VI, Lagos"
  },
  {
    id: 4,
    name: "Prime Ventures",
    email: "hello@primeventures.com",
    phone: "+234 804 567 8901",
    status: "active",
    industry: "Finance",
    dateOnboarded: "2024-03-05",
    totalInvoices: 28,
    totalRevenue: "₦9,100,000",
    contactPerson: "Sarah Williams",
    address: "12 Adeola Odeku Street, VI, Lagos"
  },
  {
    id: 5,
    name: "TechHub Nigeria",
    email: "support@techhub.ng",
    phone: "+234 805 678 9012",
    status: "active",
    industry: "Technology",
    dateOnboarded: "2024-01-28",
    totalInvoices: 52,
    totalRevenue: "₦15,800,000",
    contactPerson: "David Brown",
    address: "34 Opebi Road, Ikeja, Lagos"
  },
  {
    id: 6,
    name: "Innovate Labs",
    email: "contact@innovatelabs.com",
    phone: "+234 806 789 0123",
    status: "pending",
    industry: "Research",
    dateOnboarded: "2024-03-12",
    totalInvoices: 5,
    totalRevenue: "₦1,200,000",
    contactPerson: "Emily Davis",
    address: "8 Ligali Ayorinde Street, VI, Lagos"
  },
  {
    id: 7,
    name: "Swift Logistics",
    email: "info@swiftlogistics.com",
    phone: "+234 807 890 1234",
    status: "active",
    industry: "Logistics",
    dateOnboarded: "2023-12-01",
    totalInvoices: 67,
    totalRevenue: "₦18,400,000",
    contactPerson: "Robert Wilson",
    address: "45 Allen Avenue, Ikeja, Lagos"
  },
  {
    id: 8,
    name: "Digital Marketing Pro",
    email: "admin@digitalmarketingpro.com",
    phone: "+234 808 901 2345",
    status: "active",
    industry: "Marketing",
    dateOnboarded: "2024-02-14",
    totalInvoices: 39,
    totalRevenue: "₦10,600,000",
    contactPerson: "Lisa Anderson",
    address: "19 Admiralty Way, Lekki Phase 1, Lagos"
  }
];

export const dashboardStats = {
  totalClients: 127,
  activeClients: 98,
  pendingInvoices: 23,
  totalRevenue: "₦145,750,000",
  monthlyGrowth: "+12.5%",
  recentActivity: [
    {
      id: 1,
      client: "Acme Corporation",
      action: "Invoice Generated",
      amount: "₦850,000",
      date: "2024-01-20"
    },
    {
      id: 2,
      client: "TechHub Nigeria",
      action: "Payment Received",
      amount: "₦1,200,000",
      date: "2024-01-20"
    },
    {
      id: 3,
      client: "Swift Logistics",
      action: "New Client Onboarded",
      amount: "-",
      date: "2024-01-19"
    },
    {
      id: 4,
      client: "GlobalTech Solutions",
      action: "Invoice Sent",
      amount: "₦650,000",
      date: "2024-01-19"
    }
  ]
};

export const getClientById = (id) => {
  return clients.find(client => client.id === parseInt(id));
};