import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/lib/tmdb";

export default async function MoviesPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error UI 확인용 오류");

  const data = await getPopularMovies();

  return (
    <main>
      <h1>인기 영화</h1>

      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
