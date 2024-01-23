import BackgroundSmart from "../BackgroundContext/container/BackgroundSmart";
import HomeSmart from "../HomeContext/container/HomeSmart";
import IntroSmart from "../IntroContext/container/IntroSmart";

enum Route {
  Home = "Home",
  Intro = "Intro",
  Background = "background",
  // Add more route names here
}

const routeComponents: Record<Route, React.FC> = {
  [Route.Home]: HomeSmart,
  [Route.Intro]: IntroSmart,
  [Route.Background]: BackgroundSmart,
  // Add more route components here
};

export { routeComponents, Route };
