import { Project } from "@/app/shared/models/project";
import {
  Card,
  CardContent,
  CardActions,
  Chip,
  Typography,
  Box,
  Avatar,
  Button,
  Stack,
} from "@mui/material";


export default function ProjectCard(project: Project) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <Avatar src={project.organization.logo} variant="rounded" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {project.budget.total} • <b>{project.budget.total}</b>
          </Typography>
          <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
            {project.positions.map((tag) => (
              <Chip label={tag.title} size="small" />
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
