package david.augusto.luan.atletaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class AtletaserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AtletaserviceApplication.class, args);
	}

}
