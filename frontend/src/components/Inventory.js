import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

// Dummy vehicle data - will be replaced with FastAPI data later
const vehicleData = [
  {
    id: 1,
    year: 2025,
    make: 'Toyota',
    model: 'Sienna',
    trim: 'LE',
    bodyStyle: 'SUV / Crossover',
    price: 45000,
    mileage: 0,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    image: 'https://via.placeholder.com/300x200/6b7280/ffffff?text=2025+Toyota+Sienna',
    status: 'New Arrival',
    stockNumber: 'T2025001'
  },
  {
    id: 2,
    year: 2023,
    make: 'Honda',
    model: 'Accord',
    trim: 'Touring',
    bodyStyle: 'Sedan',
    price: 38500,
    mileage: 15000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    image: 'https://via.placeholder.com/300x200/374151/ffffff?text=2023+Honda+Accord',
    status: 'Certified Pre-Owned',
    stockNumber: 'H2023002'
  },
  {
    id: 3,
    year: 2021,
    make: 'Mazda',
    model: 'MAZDA3',
    trim: 'GT w/Turbo Auto i-ACTIV AWD',
    bodyStyle: 'Hatchback',
    price: 28900,
    mileage: 32000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    image: 'https://via.placeholder.com/300x200/4b5563/ffffff?text=2021+Mazda+MAZDA3',
    status: 'Used',
    stockNumber: 'M2021003'
  },
  {
    id: 4,
    year: 2024,
    make: 'BMW',
    model: 'X5',
    trim: 'xDrive40i',
    bodyStyle: 'SUV / Crossover',
    price: 65000,
    mileage: 8500,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    image: 'https://via.placeholder.com/300x200/6b7280/ffffff?text=2024+BMW+X5',
    status: 'Certified Pre-Owned',
    stockNumber: 'B2024004'
  },
  {
    id: 5,
    year: 2023,
    make: 'Tesla',
    model: 'Model 3',
    trim: 'Long Range',
    bodyStyle: 'Sedan',
    price: 52000,
    mileage: 12000,
    transmission: 'Automatic',
    fuelType: 'Electric',
    image: 'https://via.placeholder.com/300x200/374151/ffffff?text=2023+Tesla+Model+3',
    status: 'Used',
    stockNumber: 'T2023005'
  },
  {
    id: 6,
    year: 2022,
    make: 'Ford',
    model: 'F-150',
    trim: 'Lariat',
    bodyStyle: 'Truck',
    price: 48000,
    mileage: 25000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    image: 'https://via.placeholder.com/300x200/4b5563/ffffff?text=2022+Ford+F-150',
    status: 'Used',
    stockNumber: 'F2022006'
  }
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBodyStyle, setSelectedBodyStyle] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const bodyStyles = [...new Set(vehicleData.map(v => v.bodyStyle))];
  const makes = [...new Set(vehicleData.map(v => v.make))];
  const models = [...new Set(vehicleData.map(v => v.model))];

  // Filter and sort vehicles
  const filteredVehicles = vehicleData
    .filter(vehicle => {
      const matchesSearch = searchTerm === '' || 
        `${vehicle.year} ${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBodyStyle = selectedBodyStyle === '' || vehicle.bodyStyle === selectedBodyStyle;
      const matchesMake = selectedMake === '' || vehicle.make === selectedMake;
      const matchesModel = selectedModel === '' || vehicle.model === selectedModel;
      
      let matchesPrice = true;
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        matchesPrice = vehicle.price >= min && (max ? vehicle.price <= max : true);
      }
      
      return matchesSearch && matchesBodyStyle && matchesMake && matchesModel && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'mileage': return a.mileage - b.mileage;
        case 'newest': return b.year - a.year;
        default: return 0;
      }
    });

  return (
    <div style={{
      paddingTop: '100px',
      minHeight: '100vh',
      background: '#000000'
    }}>
      {/* Header Section */}
      <div style={{
        background: 'white',
        color: 'black',
        padding: '40px 7.6923%',
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          margin: 0
        }}>
          Used Cars, Trucks & SUVs for Sale
        </h1>
      </div>

      <div style={{ padding: '40px 7.6923%' }}>
        {/* Vehicles In Stock Title */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '30px'
        }}>
          Vehicles In Stock
        </h2>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
          borderBottom: '2px solid #e5e7eb'
        }}>
          {bodyStyles.map(style => (
            <button
              key={style}
              onClick={() => setSelectedBodyStyle(selectedBodyStyle === style ? '' : style)}
              style={{
                padding: '12px 24px',
                background: selectedBodyStyle === style ? '#ffffff' : 'transparent',
                color: selectedBodyStyle === style ? '#000000' : '#d1d5db',
                border: 'none',
                borderBottom: selectedBodyStyle === style ? '3px solid #ffffff' : '3px solid transparent',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Make Filter */}
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              fontSize: '16px',
              minWidth: '150px',
              background: '#1f2937',
              color: '#ffffff'
            }}
          >
            <option value="">Makes</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>

          {/* Model Filter */}
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              fontSize: '16px',
              minWidth: '150px',
              background: '#1f2937',
              color: '#ffffff'
            }}
          >
            <option value="">Models</option>
            {models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>

          {/* Price Range Filter */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              fontSize: '16px',
              minWidth: '180px',
              background: '#1f2937',
              color: '#ffffff'
            }}
          >
            <option value="">Select Price Range</option>
            <option value="0-25000">Under $25,000</option>
            <option value="25000-40000">$25,000 - $40,000</option>
            <option value="40000-60000">$40,000 - $60,000</option>
            <option value="60000-">Over $60,000</option>
          </select>

          {/* All Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              padding: '12px 24px',
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Filter size={16} />
            All Filters
          </button>
        </div>

        {/* Search and Sort Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '16px', color: '#d1d5db' }}>
              Showing {filteredVehicles.length} of {vehicleData.length} Vehicles
            </span>
            
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <Search 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '12px 12px 12px 40px',
                  border: '1px solid #4b5563',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '200px',
                  background: '#1f2937',
                  color: '#ffffff'
                }}
              />
            </div>
          </div>

          {/* Sort Options */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button
              onClick={() => setSortBy('price-low')}
              style={{
                padding: '8px 16px',
                background: sortBy === 'price-low' ? '#ffffff' : 'transparent',
                color: sortBy === 'price-low' ? '#000000' : '#d1d5db',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Lowest Price
            </button>
            <button
              onClick={() => setSortBy('price-high')}
              style={{
                padding: '8px 16px',
                background: sortBy === 'price-high' ? '#ffffff' : 'transparent',
                color: sortBy === 'price-high' ? '#000000' : '#d1d5db',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Highest Price
            </button>
            <button
              onClick={() => setSortBy('newest')}
              style={{
                padding: '8px 16px',
                background: sortBy === 'newest' ? '#ffffff' : 'transparent',
                color: sortBy === 'newest' ? '#000000' : '#d1d5db',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Newest First
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                fontSize: '14px',
                background: '#1f2937',
                color: '#ffffff'
              }}
            >
              <option value="newest">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="mileage">Lowest Mileage</option>
            </select>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedBodyStyle('');
                setSelectedMake('');
                setSelectedModel('');
                setPriceRange('');
                setSortBy('newest');
              }}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                color: '#d1d5db',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {filteredVehicles.map(vehicle => (
            <div
              key={vehicle.id}
              style={{
                background: '#1f2937',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Vehicle Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                {vehicle.status === 'New Arrival' && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#ffffff',
                    color: '#000000',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    JUST ARRIVED
                  </div>
                )}
              </div>

              {/* Vehicle Details */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '8px'
                }}>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '15px'
                }}>
                  {vehicle.trim}
                </p>

                {/* Price */}
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '15px'
                }}>
                  ${vehicle.price.toLocaleString()}
                </div>

                {/* Vehicle Info Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  fontSize: '14px',
                  color: '#d1d5db'
                }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Financing Payments</div>
                    <div>${Math.round(vehicle.price / 60)} / weekly</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>Mileage</div>
                    <div>{vehicle.mileage.toLocaleString()} km</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>Stock #</div>
                    <div>{vehicle.stockNumber}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>Transmission</div>
                    <div>{vehicle.transmission}</div>
                  </div>
                </div>

                {/* Action Button */}
                <button style={{
                  width: '100%',
                  padding: '12px',
                  background: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  marginTop: '20px',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#e5e7eb'}
                onMouseLeave={(e) => e.target.style.background = '#ffffff'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#d1d5db'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>No vehicles found</h3>
            <p>Try adjusting your filters or search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;