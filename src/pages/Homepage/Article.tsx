import articleObj from "../../data/ProjectsArticle.json";
import { images } from "../../constants";
import { Carousel } from "@mantine/carousel";
import { Flex, Text, Image, Group, Badge } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type ArticleProps = {
  id: number;
};

const Article = ({ id }: ArticleProps) => {
  const mobile = useMediaQuery("(max-width: 720px)");

  const articleData = articleObj.find((item) => {
    return item.id === id;
  });

  return (
    <Flex direction="column" gap={16} p={mobile ? "2%" : "5%"}>
      {/**@ts-ignore */}
      <Image src={images[articleData?.mainImg]} />
      <Group>
        {articleData?.tech?.map((item) => {
          return (
            <Badge
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              size={mobile ? "sm" : "lg"}
            >
              {item}
            </Badge>
          );
        })}
      </Group>
      <Text fw="600" fz={mobile ? "sm" : "md"}>
        {articleData?.mainPara}
      </Text>

      {articleData?.performanceImg && (
        <>
          <Text fw="900" fz={mobile ? "lg" : "xl"} td="underline">
            Performance Score
          </Text>
          {/**@ts-ignore */}
          <Image src={images[articleData?.performanceImg]} />
        </>
      )}
      <Text fw="900" fz={mobile ? "lg" : "xl"} td="underline">
        About the project
      </Text>
      {articleData?.paragraphs.map((item) => {
        return <Text fz={mobile ? "sm" : "md"}>{item}</Text>;
      })}
      <Carousel slideSize="100%">
        {articleData?.img.map((item) => {
          return (
            <Carousel.Slide>
              {/**@ts-ignore */}
              <Image src={images[item]} radius="lg" />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default Article;
