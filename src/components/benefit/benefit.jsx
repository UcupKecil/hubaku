import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataModel } from "../../data/data";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from "react-router-dom";

function Benefit() {
  return (
    <section id="benefit" className="px-6">
      <h1 className="text-2xl font-semibold">KENAPA HARUS HUBA ?</h1>
      <p>
        100% DAGING SAPI & DAGING AYAM ASLI<br></br>
        TANPA BAHAN PENGAWET<br></br>
        SAMBEL SUPER PUEDESSS<br></br>
        HALALAN THAYYIBAN<br></br>
        
      </p>
      <h2 className="pt-12 text-xl font-semibold">PRODUK KAMI</h2>
      <p></p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
            {DataModel.map((v,i)=>{
                return <Card key={i} id={i} foto={v.foto} text={v.text}/>
            })}
        </div>
      </div>
      
    </section>
  );
}

export default Benefit;

function Card(props) {
  return (
    <Link className="w-[12.375rem] h-[15.25rem] relative" to={`/model/${props.id}`}>
      <LazyLoadImage
        width={198}
        height={244}
        placeholderSrc={props.placeholder}
        effect="blur"
        src={props.foto}
        className="w-full h-full object-cover rounded-2xl z-0"
        alt={props.text}
      />
      <div className="bg-black/20 h-full w-full absolute top-0 rounded-2xl" />
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
    </Link>
  );
}


