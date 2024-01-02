"use client";

import { fetchData } from "@/lib/utils";
import { useParams } from "next/navigation";

const InformationPage = () => {
  const { userId } = useParams<{ tag: string; item: string }>();
  return (
    <div>
      <h1>User Details Page</h1>
      <p>ID: {userId}</p>
    </div>
  );
};

export default InformationPage;
