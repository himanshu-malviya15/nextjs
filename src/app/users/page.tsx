import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ButtonNavigation from "@/components/buttonNavigation";

interface data {
  name: string;
  email: string;
  id: string;
  phoneNumber: number;
}

async function getData(): Promise<data[]> {
  const result = await fetch("http://localhost:4000/items");
  return result.json();
}
const page = async () => {
  const dataItem = await getData();

  return (
    <main>
      <div className="grid grid-cols-4 gap-7 p-10">
        {dataItem.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>
                  <div className="mt-5">{item.email}</div>
                </CardDescription>
                <CardDescription>
                  <div className="mt-5">{item.phoneNumber}</div>
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <ButtonNavigation userId={item.id} />
            </CardFooter>    
          </Card>
        ))}
      </div>
      
    </main>
  );
};

export default page;
