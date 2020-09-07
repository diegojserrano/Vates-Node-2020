
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadosCiviles](
	[Id] [int] NOT NULL,
	[Nombre] [varchar](20) NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EstadosCiviles] ADD  CONSTRAINT [EstadosCiviles_PK] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NULL,
	[Edad] [int] NULL,
	[IdEstadoCivil] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Personas] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Personas]  WITH CHECK ADD  CONSTRAINT [Personas_FK] FOREIGN KEY([IdEstadoCivil])
REFERENCES [dbo].[EstadosCiviles] ([Id])
GO
ALTER TABLE [dbo].[Personas] CHECK CONSTRAINT [Personas_FK]
GO


insert into dbo.EstadosCiviles values (1,'Soltero')
insert into dbo.EstadosCiviles values (2,'Casado')
insert into dbo.EstadosCiviles values (3,'Viudo')
insert into dbo.EstadosCiviles values (4,'Otro')
