import { Card, Image, Flex, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type ExperienceCardProps = {
  img: string;
  employer: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

const ExperienceCard = ({
  img,
  employer,
  title,
  description,
  startDate,
  endDate,
}: ExperienceCardProps) => {
  const mobile = useMediaQuery("(max-width: 720px)");

  return (
    <Card p={{ xs: 0, lg: 16 }}>
      <Flex gap={mobile ? "12px" : "24px"} align={mobile ? "start" : "center"}>
        <Flex>
          <Image
            src={img}
            height={mobile ? "50px" : "80px"}
            width={mobile ? "50px" : "80px"}
            radius="50%"
          />
        </Flex>
        <Flex direction={"column"}>
          <Group spacing={mobile ? "none" : "xs"}>
            <Text fw="500">{employer},</Text>
            <Text color="#2b16e2" fw="600">
              {title}
            </Text>
          </Group>
          <Group spacing={"none"}>
            <Text color="dimmed" fw="500" fz={mobile ? "xs" : "sm"}>
              {startDate}
              {" - "}
            </Text>
            <Text color="dimmed" fw="500" fz={mobile ? "xs" : "sm"}>
              {endDate}
            </Text>
          </Group>
          <Text mt="8px" fz={mobile ? "sm" : "md"}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
export default ExperienceCard;
