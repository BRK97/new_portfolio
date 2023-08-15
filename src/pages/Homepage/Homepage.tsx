import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { brand } from "../../constants";
import { images } from "../../constants";

import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ContactForm from "./Contact";
import Article from "./Article";

import stackData from "../../data/stack.json";
import experienceData from "../../data/experience.json";
import educationData from "../../data/education.json";
import projectsData from "../../data/projects.json";

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";

import {
  Flex,
  Paper,
  Title,
  Text,
  Image,
  Space,
  Box,
  createStyles,
  getStylesRef,
  rem,
  Group,
  Modal,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },
  carouselIndicators: {
    position: "absolute",
    bottom:
      "60px" /* Adjust this value to control the distance from the bottom */,
    left: "50%",
    transform: "translateX(-50%)", // Adjust this value as needed
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

const Homepage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const mobile = useMediaQuery("(max-width: 1280px)");
  const tablet = useMediaQuery("(min-width: 900px)");
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (content: React.ReactNode, title: string) => {
    setModalTitle(title);
    setOpenModal(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent(null);
  };
  return (
    <>
      <Modal
        opened={openModal}
        onClose={handleCloseModal}
        title={modalTitle}
        centered
        size="lg"
        overlayProps={{
          color: theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        {modalContent}
      </Modal>
      <Flex p={{ xs: 24, md: 64 }} direction={mobile ? "column" : "row"}>
        <Box component="section" style={{ flex: "35%" }}>
          <Flex
            direction="column"
            gap={40}
            h={mobile ? "fit-content" : "90vh"}
            pos={mobile ? "static" : "fixed"}
            align={{ xs: "center", xl: "start" }}
          >
            <Box>
              <Image
                src={brand.ProfileImg}
                alt="Profile image"
                // width={184}
                width={184}
                height={184}
                radius="50%"
                withPlaceholder
                m={{ xs: "0 auto" }}
              />
              <Space h="xl" />
              <Title fz={{ xs: "28px", lg: "44px" }} order={1} weight={900}>
                Barak Ostroumov
              </Title>
              <Text
                fz={{ xs: "22px", lg: "28px" }}
                fw="600"
                color="#2b16e2"
                align="center"
              >
                Full Stack Developer
              </Text>
            </Box>
            <Box>
              <Title
                size={mobile ? "h4" : "h3"}
                order={2}
                td="underline"
                align={mobile ? "center" : "start"}
              >
                Stack
              </Title>
              <Space h="sm" />
              <Flex
                wrap="wrap"
                gap="18px"
                w={mobile ? "100%" : "370px"}
                justify={mobile ? "center" : "start"}
              >
                {stackData.map((item) => {
                  return (
                    <Text
                      align={mobile ? "center" : "start"}
                      fz={{ xs: 14, lg: 18 }}
                      fw={600}
                      color={item.highlight ? "#2b16e2" : "dimmed"}
                    >
                      {item.text}
                    </Text>
                  );
                })}
              </Flex>
            </Box>
            <Group spacing="none">
              <ActionIcon
                component="a"
                size="xl"
                radius="md"
                color="gray"
                href="https://www.linkedin.com/in/barak-ostroumov-14a74920b/"
                target="_blank"
              >
                <IconBrandLinkedin size="2rem" />
              </ActionIcon>
              <ActionIcon
                component="a"
                size="xl"
                radius="md"
                color="gray"
                href="https://github.com/BRK97"
                target="_blank"
              >
                <IconBrandGithub size="2rem" />
              </ActionIcon>
            </Group>
          </Flex>
        </Box>
        <Paper style={{ flex: "65%" }}>
          <Flex direction="column" gap="24px">
            <Title size={mobile ? "h2" : "h1"} order={2} weight={900}>
              Projects
            </Title>
            <Flex gap="16px">
              <Carousel
                withIndicators
                height={mobile ? 440 : 400}
                // w={"320px"}
                slideSize={tablet ? "33.33333%" : "66.66666%"}
                slideGap="md"
                breakpoints={[
                  { maxWidth: "md", slideSize: "50%" },
                  { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
                ]}
                loop
                align="start"
                nextControlIcon={<IconArrowRight size={16} />}
                previousControlIcon={<IconArrowLeft size={16} />}
                classNames={classes}
                styles={{
                  indicator: {
                    width: rem(12),
                    height: rem(4),
                    transition: "width 250ms ease",
                    backgroundColor: "#aaa",
                    "&[data-active]": {
                      width: rem(40),
                      backgroundColor: "#2538df",
                    },
                  },
                }}
              >
                {projectsData.map((item) => {
                  return (
                    <Carousel.Slide>
                      <ProjectCard
                        title={item.title}
                        description={item.description}
                        srcCodeLink={item.codeLink}
                        demoLink={item.demoLink}
                        learnMore={() => {
                          handleOpenModal(<Article id={item.id} />, item.title);
                        }}
                        //@ts-ignore
                        img={images[item.img]}
                      />
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
            </Flex>

            <Title size={mobile ? "h2" : "h1"} order={2} weight={900}>
              Experience
            </Title>
            {experienceData.map((item) => {
              return (
                <ExperienceCard
                  //@ts-ignore
                  img={images[item.imgName]}
                  employer={item.employer}
                  title={item.jobTitle}
                  description={item.description}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              );
            })}
            <Title size={mobile ? "h2" : "h1"} order={2} weight={900}>
              Education
            </Title>
            {educationData.map((item) => {
              return (
                <EducationCard
                  //@ts-ignore
                  img={images[item.imgName]}
                  org={item.org}
                  title={item.jobTitle}
                  description={item.description}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              );
            })}
            {/* <Title size="h3" order={2} td="underline">
            Contact
          </Title> */}
            <Box w={{ xs: "96%", xl: "70%" }} m="24px auto">
              <ContactForm />
            </Box>
          </Flex>
        </Paper>
      </Flex>
    </>
  );
};

export default Homepage;
