import { Card } from "@/components/ui/card";



const Home = async ({
    params: { genres },
  }: {
    params: { genres: string };
  }) => {
    return (
        <Card>
            <div>
                <h2>Search</h2>
                <p>Genres</p>
                <p>See lists of movies by genre</p>
            </div>
            <div></div>
        </Card>
    )
  }
export default Home