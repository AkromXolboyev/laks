// SearchCard.tsx
import React from 'react';

type SearchCardProps = {
  id: number;
  name: string;
  onClick: () => void; 
};

export const SearchCard: React.FC<SearchCardProps> = ({ id, name, onClick }) => {
  return (
    <div className="search-card" onClick={onClick}>
      <p>{name}</p>
      
    </div>
  );
};
