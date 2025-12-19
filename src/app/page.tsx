import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

const Home = () => {
  return (
    <div className="p-10 bg-shop-light-pink">
      <p className="font-semibold text-xl">Home</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel odio,
        sunt suscipit sit modi quaerat deserunt eveniet distinctio, cupiditate
        error quia molestias dignissimos doloribus animi provident repudiandae
        inventore corporis.
      </p>
      <Button className="mt-4 bg-shop-light-green cursor-pointer hover:bg-shop-dark-green hover:text-light-text">
        Click Me
      </Button>
      <Label htmlFor="email" className="mt-4">
        Email
      </Label>
      <Input id="email" placeholder="example@email.com" className="mt-4" />
    </div>
  );
};

export default Home;
