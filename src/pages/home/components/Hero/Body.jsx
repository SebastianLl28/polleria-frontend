import { Button, Grid } from '@mui/material'
import { Text, Title } from '../../../../styled/fonts'

const Body = () => {
  return (
    <Grid item container xs={6} alignContent='center' gap={2.5}>
      <Title>Atrévete a probar los mejores pollos que existen</Title>
      <Text maxWidth={460}>
        Nuestra dedicación a la calidad premium y a las recetas artesanales
        garantiza una experiencia gastronómica única que nunca olvidarás.
      </Text>
      <Grid gap={2} container>
        <Button variant='contained' color='primary'>
          Menu
        </Button>
        <Button variant='contained' color='primary'>
          Reservar una mesa
        </Button>
      </Grid>
    </Grid>
  )
}

export default Body
