import { Box, Chip, Typography, Stack } from "@mui/material";

type FilterTagsProps = {
  filters: { label: string }[];
};
export default function FilterTags({ filters }: FilterTagsProps) {
  return (
    <Box sx={{ backgroundColor: "#f5fafa", p: 2, borderRadius: 2, mb: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Filtros aplicados
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {filters.map((f, idx) => (
          <Chip key={idx} label={f.label} />
        ))}
      </Stack>
    </Box>
  );
}
