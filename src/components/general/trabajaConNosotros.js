import React from 'react'

function trabajaConNosotros () {
  return (
    <>
      <form>
        <fieldset>
          REGISTRO
          <h2>No dudes en ponerte en contacto con nosotros si tienes dudas o sugerencias.</h2>
        </fieldset>


        <input type="text" id="Nombre" name="nombre" placeholder="Nombre" />


        <input type="text" id="Apellido" name="nombre" placeholder="Apellido" />


        <input type="text" id="dni" name="dni" placeholder="N° de documento" />


        <input type="text" id="Username" name="Username" placeholder="Email" />


        <input type="password" placeholder="Clave" id="password" />

        <input type="submit" id="submit" placeholder="Registrarme"  value="Registrarme" />


      </form>
    </>
  )
}

export default trabajaConNosotros;