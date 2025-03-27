# Challenge Técnico Suris: Back End (.NET Core )

Para ejecutar la API seguir los siguientes pasos:
- Verificar que la PC cuente con el SDK de .NET 8 y que la característica de esta versión esté habilitada en Visual Studio 2022.
- Abrir la solución con Visual Studio 2022.
- Se utilizó EntityFrameworkCore para la creación y operación de la base de datos por lo que se debe abrir la Package Manager Console y ejecutar el script update-database con el proyecto default seteado en Challenge.Suris.API.
- Ejecutar la aplicación (F5).

La base se creará en la PC local según lo seteado en la connection string del appsettings.json (sección ConnectionStrings). Si necesita cambiar el servidor, puede hacerlo desde tal configuración.
