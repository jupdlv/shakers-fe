import { Budget } from "@/app/shared/models/budget";
import { Project } from "@/app/shared/models/project";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";


function parserBudget(budget: Budget): string{
  return budget?.hourFrom ? `${budget.hourFrom} - ${budget.hourTo} €/h` : `${budget.total} €`
}

export default function ProjectCard(project: Project) {
  
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <Avatar src={project.organization.logo} variant="rounded" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {project.category.name} • <b> € {parserBudget(project.budget)}</b>
          </Typography>
          <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
            {project.positions.map((tag, index) => (
              <Chip key={index} label={tag.title} size="small" />
            ))}
          </Stack>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" endIcon={"➔"}>
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
