import React, { useState } from "react";
import Card from "./Card";
import certificationData from "./certificationsIndex";

function Certification() {
  const [cData] = useState(certificationData.data);
  return (
    <>
      <div className="mt-6 container mx-auto">
        <div className="w-6/12">
          {cData.map(
            ({
              certificationIcon,
              certificationTitle,
              certificationPassage,
            }) => (
              <Card
                image={certificationIcon}
                title={certificationTitle}
                passage={certificationPassage}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Certification;
