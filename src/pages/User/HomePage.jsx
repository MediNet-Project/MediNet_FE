import React from "react";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
const HomePage = () => {
  return (
    <div className="px-2">
      <Button
        onClick={() => {
          toast.success("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }}
      >
        sadsa
      </Button>
    </div>
  );
};

export default HomePage;
