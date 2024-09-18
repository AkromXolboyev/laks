// SearchCard.tsx
import React from 'react';

type SearchCardProps = {
  id: number;
  name: string;
  onClick: () => void; // onClick propsi qo'shiladi
};

export const SearchCard: React.FC<SearchCardProps> = ({ id, name, onClick }) => {
  return (
    <div className="search-card" onClick={onClick}>
      <p>{name}</p>
      {/* boshqa mazmun */}
    </div>
  );
};
