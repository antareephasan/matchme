"use client";

import { Button, Link } from "@heroui/react";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Hello</h1>
      <Button
        as={Link}
        href="/members"
        color="danger"
        variant="bordered"
        startContent={<GoSmiley />}
      >
        Baby Me
      </Button>
    </div>
  );
}
