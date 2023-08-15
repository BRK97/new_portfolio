import {
  Card,
  Image,
  Group,
  Text,
  ActionIcon,
  Space,
  Tooltip,
} from "@mantine/core";
import {
  IconExternalLink,
  IconCode,
  IconQuestionMark,
} from "@tabler/icons-react";

type ProjectCardProps = {
  img?: string;
  title?: string;
  description?: string;
  srcCodeLink?: string;
  demoLink?: string;
  learnMore?: () => void;
};

const ProjectCard = ({
  img,
  title,
  description,
  srcCodeLink,
  demoLink,
  learnMore,
}: ProjectCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={img} height="160" alt="norway"></Image>
      </Card.Section>
      <Space h="sm" />
      <Text weight={500}>{title}</Text>
      <Space h="sm" />

      <Text size="sm" color="dimmed">
        {description}
      </Text>
      <Group position="center" spacing="md">
        <Tooltip label="View source code" withArrow arrowSize={6}>
          <ActionIcon
            component="a"
            href={srcCodeLink}
            target="_blank"
            disabled={!srcCodeLink}
            size="lg"
            variant="subtle"
            color="gray"
            mt="md"
            radius="md"
            td="underline"
          >
            <IconCode />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Learn more" withArrow arrowSize={6}>
          <ActionIcon
            component="a"
            size="lg"
            variant="subtle"
            color="gray"
            mt="md"
            radius="md"
            onClick={learnMore}
          >
            <IconQuestionMark />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="View demo" withArrow arrowSize={6}>
          <ActionIcon
            component="a"
            href={demoLink}
            target="_blank"
            disabled={!demoLink}
            size="lg"
            variant="light"
            color="indigo"
            mt="md"
            radius="md"
          >
            <IconExternalLink />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Card>
  );
};

export default ProjectCard;
