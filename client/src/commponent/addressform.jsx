import React, { useState } from "react";
import { CreateInput } from "thai-address-autocomplete-react";

const InputThaiAddress = CreateInput();

const AddressThai = () => {
  const [address, setAddress] = useState({
    district: "", // ตำบล tambol
    amphoe: "", // อำเภอ amphoe
    province: "", // จังหวัด changwat
    zipcode: "", // รหัสไปรษณีย์ postal code
  });

  const handleChange = (scope) => (value) => {
    setAddress((oldAddr) => ({
      ...oldAddr,
      [scope]: value,
    }));
  };

  const handleSelect = (address) => {
    setAddress(address);
  };

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex   gap-4">
        <div className=" w-[50%]">
       
          <label>Sub District</label>
          <InputThaiAddress.District
            className=" h-[35px]"
            value={address["district"]}
            onChange={handleChange("district")}
            onSelect={handleSelect}
          />
        </div>

        <div className=" w-[50%]">
          
          <label>District</label>
          <InputThaiAddress.Amphoe
            className=" h-[35px]"
            value={address["amphoe"]}
            onChange={handleChange("amphoe")}
            onSelect={handleSelect}
          />
        </div>
        
      </div>
      <div className=" flex   gap-4">
        <div className=" w-[50%]">
       
          <label>Province</label>
          <InputThaiAddress.Province
          className=" h-[35px]"
        value={address["province"]}
        onChange={handleChange("province")}
        onSelect={handleSelect}
      />
        </div>

        <div className=" w-[50%]">
          
          <label>Post Code</label>
          <InputThaiAddress.Zipcode
          className=" h-[35px]"
        value={address["zipcode"]}
        onChange={handleChange("zipcode")}
        onSelect={handleSelect}
      />
        </div>
        
      </div>
      

      
    </div>
  );
};

export default AddressThai;
