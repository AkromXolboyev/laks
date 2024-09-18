interface BannerCardProps {
    img: string;
  }
  
  export const BannerCard: React.FC<BannerCardProps> = ({ img }) => {
    return (
      <div className="banner-card">
        <img src={img} alt="banner" />
      </div>
    );
  };
  