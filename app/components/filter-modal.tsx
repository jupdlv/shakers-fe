'use client'

import { getCategories, postFilterProject } from '@/app/lib/db/project-db-service'
import {
    Box,
    Button,
    Chip,
    FormControl,
    FormControlLabel,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Typography
} from '@mui/material'
import { useEffect, useState } from 'react'

export default function ProjectFilter() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await getCategories()
                setTipoProyecto(categories)
            } catch (error) {
            }
        }

        fetchData()
    }, [])

    const [especialidades, setEspecialidades] = useState([])
    const [habilidades, setHabilidades] = useState<[]>([])
    const [tipoProyecto, setTipoProyecto] = useState([])
    const [industria, setIndustria] = useState([])
    const [orden, setOrden] = useState('reciente')

    const handleEliminarFiltros = () => {
        setEspecialidades([])
        setHabilidades([])
        setTipoProyecto([])
        setIndustria([])
        setOrden('reciente')
    }

    return (
        <Box sx={{ maxWidth: 500, p: 4, borderRadius: 2, boxShadow: 3, bgcolor: 'white' }}>
            <Typography variant="h6" gutterBottom>
                Filtrar Proyectos
            </Typography>

            <FormControl fullWidth margin="normal">
                <FormLabel>Especialidades</FormLabel>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {especialidades.map((esp, idx) => (
                        <Chip
                            key={idx}
                            label={esp}
                            onDelete={() => setEspecialidades(especialidades.filter(e => e !== esp))}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Stack>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <FormLabel>Habilidades</FormLabel>
                <Input placeholder="Busca y añade" fullWidth />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <FormLabel>Tipo de proyecto</FormLabel>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {tipoProyecto.map((esp, idx) => (
                        <Chip
                            key={idx}
                            label={esp}
                            onDelete={() => setTipoProyecto(especialidades.filter(e => e !== esp))}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Stack>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <FormLabel>Industria</FormLabel>
                <Input placeholder="Busca y añade" fullWidth />
            </FormControl>

            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Ordenar por</FormLabel>
                <RadioGroup value={orden} onChange={(e) => setOrden(e.target.value)}>
                    <FormControlLabel
                        value="reciente"
                        control={<Radio />}
                        label="Fecha de publicación (Más reciente primero)"
                    />
                    <FormControlLabel
                        value="antiguo"
                        control={<Radio />}
                        label="Fecha de publicación (Más antiguo primero)"
                    />
                </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                <Button variant="text" color="error" onClick={handleEliminarFiltros}>
                    Eliminar Filtros
                </Button>
                <Button variant="contained" color="primary">
                    Filtrar
                </Button>
            </Box>
        </Box>
    )
}
