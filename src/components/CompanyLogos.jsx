import { companyLogos } from "../constants";
import TagLine from "./Tagline";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Team Memebers
      </h5>
      <ul className="flex">
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">Dev</li>
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">Kathan</li>
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">Yatri</li>
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">Heet</li>
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">Rajat</li>
      </ul>
      <ul className="flex mb-10">
        <li className="flex items-center justify-center flex-1 h-[0.5rem]"><TagLine>22BCP185</TagLine> </li>
        <li className="flex items-center justify-center flex-1 h-[0.5rem]"><TagLine>22BCP162</TagLine> </li>
        <li className="flex items-center justify-center flex-1 h-[0.5rem]"><TagLine>22BCP176</TagLine> </li>
        <li className="flex items-center justify-center flex-1 h-[0.5rem]"><TagLine>22BCP169</TagLine> </li>
        <li className="flex items-center justify-center flex-1 h-[0.5rem]"><TagLine>22BCP170</TagLine> </li>
        
                                    
      </ul>
    </div>
  );
};

export default CompanyLogos;
