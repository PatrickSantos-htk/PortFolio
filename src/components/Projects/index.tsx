import { FaGithub, FaGlobe } from "react-icons/fa";
import {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    TechIcons,
    TechIcon,
    Buttons,
    Button,

} from "./style";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    techs: string[];
    code: string;
    live: string;
}

export function Projects({ title, description, image, techs, code, live }: ProjectProps) {
    return (
        <Card>

            <CardImage src={image} alt={title} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>

                <TechIcons>
                    {techs.map((tech, index) => (
                        <TechIcon key={index}>
                            <img src={`/icons/${tech}.svg`} alt={tech} />
                        </TechIcon>
                    ))}
                </TechIcons>

                <Buttons>
                    <Button href={code} target="_blank" blue>
                        <FaGithub /> Code
                    </Button>
                    <Button href={live} target="_blank" yellow>
                        <FaGlobe /> Live
                    </Button>
                </Buttons>
            </CardContent>
        </Card>
    );
}
