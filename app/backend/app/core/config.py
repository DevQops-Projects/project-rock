from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Project Rock API"
    service_name: str = "project-rock-api"
    app_version: str = "0.1.0"
    environment: str = "development"

    host: str = "0.0.0.0"
    port: int = 8000
    
    database_host: str = "localhost"
    database_port: int = 5432
    database_name: str = "projectrock"
    database_user: str = "projectrock"
    database_password: str = "projectrock"

    @property
    def database_url(self) -> str:
        return (
            f"postgresql+psycopg://"
            f"{self.database_user}:{self.database_password}"
            f"@{self.database_host}:{self.database_port}"
            f"/{self.database_name}"
        )

    log_level: str = "INFO"

    frontend_url: str = "http://localhost:5173"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
    )


settings = Settings()
