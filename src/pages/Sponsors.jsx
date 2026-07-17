import React from 'react';
import PartnerMatrix from '../components/PartnerMatrix';

export default function Sponsors() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-24 pb-16 bg-[#082028]">
      {/* Background Ambience */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#12E9E9]/5 rounded-full blur-[100px] pointer-events-none" />
      <PartnerMatrix />
    </div>
  );
}
