import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { websiteFeatures } from "@/config/website";

type Props = {};

const FeaturesSection = (props: Props) => {
  return (
    <section className="container mx-auto py-24" id="features">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Features That Put You in Control
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-16">
        Take charge of your video feed with Cam Tuner’s smart, simple controls.
        Zoom, flip, adjust, and enhance — all in real-time!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {websiteFeatures.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <div className="p-5 bg-primary/5 inline-flex mb-5 rounded-xl text-primary">
                <item.icon size={24} />
              </div>
              <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
              <CardDescription className="text-base">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
