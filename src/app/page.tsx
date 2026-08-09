'use client';

import React, { useState } from 'react';
import { Store, ShoppingBag, MapPin, Phone, MessageSquare, Navigation, Compass, Plus } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Listings' },
  { id: 'pasalubong_handicrafts', label: '🎁 Pasalubong & Crafts' },
  { id: 'cafes_restaurants', label: '☕ Cafes & Eats' },
  { id: 'tours_rentals', label: '🛵 Tours & Scooter Rentals' },
  { id: 'inns_lodging', label: '🏨 Inns & Lodging' },
  { id: 'farm_produce', label: '🌾 Farm Produce' },
  { id: 'local_services', label: '💇 Services & Salons' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'directory' | 'marketplace'>('directory');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sampleListings = [
    {
      id: 1,
      type: 'directory_business',
      title: 'Tita’s Organic Cashew & Pasalubong',
      description: 'Authentic roasted and fried cashew nuts, honey, and local handicrafts in Puerto Princesa.',
      price: 350,
      category: 'pasalubong_handicrafts',
      barangay: 'San Pedro',
      address: 'National Highway, Brgy. San Pedro',
      googleMapsUrl: 'https://maps.google.com',
      messenger: 'titasorganics',
      whatsapp: '639171234567',
      image: 'https://images.unsplash.com/photo-1509358211525-24298f7c9284?w=500&q=80',
      isVerified: true
    },
    {
      id: 2,
      type: 'directory_business',
      title: 'Island Breeze Scooter & Van Rental',
      description: 'Automatic scooters and 12-seater vans available for daily hire to San Vicente and El Nido.',
      price: 500,
      category: 'tours_rentals',
      barangay: 'Bancao-Bancao',
      address: 'Near PPC Airport, Brgy. Bancao-Bancao',
      googleMapsUrl: 'https://maps.google.com',
      messenger: 'islandbreezeppc',
      whatsapp: '639189876543',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80',
      isVerified: true
    },
    {
      id: 3,
      type: 'marketplace_item',
      title: 'Fresh Organic Lettuce & Herbs (Per Kilo)',
      description: 'Harvested daily from our Irawan farm. Bulk orders available for local restaurants.',
      price: 180,
      category: 'farm_produce',
      barangay: 'Irawan',
      address: 'Brgy. Irawan',
      googleMapsUrl: 'https://maps.google.com',
      messenger: 'irawanfarms',
      whatsapp: '639201112233',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80',
      isVerified: false
    }
  ];

  const filteredListings = sampleListings
    .filter(item => item.type === (activeTab === 'directory' ? 'directory_business' : 'marketplace_item'))
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-16 font-sans">
      <header className="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-emerald-300" />
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-none">Palawan Online Directory</h1>
              <p className="text-xs text-emerald-200 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-300" /> Puerto Princesa City & Surrounding Towns
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="inline-flex rounded-xl bg-emerald-900/60 p-1 border border-emerald-700/60 text-xs font-medium w-full md:w-auto">
              <button
                onClick={() => setActiveTab('directory')}
                className={`flex-1 md:flex-initial px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'directory'
                    ? 'bg-white text-emerald-900 font-bold shadow-sm'
                    : 'text-emerald-100 hover:text-white'
                }`}
              >
                <Store className="w-4 h-4" />
                Directory Guide
              </button>

              <button
                onClick={() => setActiveTab('marketplace')}
                className={`flex-1 md:flex-initial px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'marketplace'
                    ? 'bg-white text-emerald-900 font-bold shadow-sm'
                    : 'text-emerald-100 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                Buy & Sell
              </button>
            </div>

            <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center gap-1 shrink-0">
              <Plus className="w-4 h-4" /> List Item
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-gray-200 sticky top-[68px] md:top-[61px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition flex flex-col">
              <div className="relative h-48 bg-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                {item.isVerified && (
                  <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                    ✓ Verified MSME
                  </span>
                )}
                {item.price && (
                  <span className="absolute top-3 right-3 bg-gray-900/90 text-white font-bold text-xs px-2.5 py-1 rounded-md shadow">
                    ₱{item.price}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Brgy. {item.barangay}, Puerto Princesa
                  </p>

                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                  <a
                    href={item.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center bg-emerald-50 text-emerald-700 p-2 rounded-xl text-xs font-semibold hover:bg-emerald-100 transition"
                  >
                    <Navigation className="w-4 h-4 mb-0.5 text-emerald-600" />
                    Map
                  </a>

                  <a
                    href={`https://wa.me/${item.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center bg-green-50 text-green-700 p-2 rounded-xl text-xs font-semibold hover:bg-green-100 transition"
                  >
                    <Phone className="w-4 h-4 mb-0.5 text-green-600" />
                    WhatsApp
                  </a>

                  <a
                    href={`https://m.me/${item.messenger}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 p-2 rounded-xl text-xs font-semibold hover:bg-blue-100 transition"
                  >
                    <MessageSquare className="w-4 h-4 mb-0.5 text-blue-600" />
                    Messenger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
