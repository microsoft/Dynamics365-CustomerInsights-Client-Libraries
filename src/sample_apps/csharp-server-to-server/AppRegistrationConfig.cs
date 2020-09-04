namespace csharp_server_to_server
{
    public class AppRegistrationConfig
    {
        public string Instance { get; set; }

        public string Tenant { get; set; }

        public string ClientId { get; set; }

        public string ClientSecret { get; set; }

        public string Authority => string.Format(Instance, Tenant);
    }
}
