<script>
    import { fade } from 'svelte/transition'
</script>

<svelte:head>
	<title>ae app labs | Courses | Java Spring Microservices</title>
</svelte:head>

<section class="section-header banner-bg" transition:fade|global>
	<div class="container py-6 fadeInUp">
        <p class="is-size-2 is-family-secondary">Java Spring Microservices Course</p>
        <p class="is-size-4 stagger2 mt-4"><span class="tag is-primary">Development</span></p>
	</div>
</section>

<section class="section fadeInUp">
	<div class="container">
		<div class="columns">
			<div class="column is-4">
                <p><span class="has-text-weight-bold">Duration:</span> 12 Weeks</p>
				<br>
				<ul>
					<li><a href="#phase-1" class="is-link">Phase 1: Java Core (3 weeks)</a></li>
					<li><a href="#phase-2" class="is-link">Phase 2: Spring Boot + JPA + Security (5 weeks)</a></li>
					<li><a href="#phase-3" class="is-link">Phase 3: Microservices + Testing (4 weeks)</a></li>
					<li><a href="#final-project" class="is-link">Final Project</a></li>
				</ul>
            </div>
			<div class="column is-8">
                <p class="is-size-4 mb-4 has-text-weight-bold">Course Description</p>
				<p class="mb-4">This intensive 3-month course is designed to transform beginners into competent backend developers, guiding them from core Java fundamentals to building scalable microservices using Spring Boot. The course emphasizes hands-on learning, combining theory with real-world projects to ensure practical understanding.</p>

				<p class="mb-4">Participants will start by mastering Java essentials, including Object-Oriented Programming, Collections, Java 8 features, exception handling, and basic concurrency. They will then progress to Spring Boot, learning to create RESTful APIs, integrate with databases using JPA/Hibernate, implement validation, handle errors, and secure applications with Spring Security.</p>

				<p class="mb-4">The final phase introduces microservices architecture, teaching service discovery, API gateways, inter-service communication, resilience patterns, observability, and containerization with Docker. By the end of the course, students will have developed a fully functional, multi-service backend application, demonstrating their ability to design, build, and deploy modern backend systems.</p>

                <p class="is-size-4 mb-4 has-text-weight-bold">Key Highlights</p>
				<ul class="mb-4 ml-2">
					<li>Fast-track learning of Java fundamentals in 3 weeks</li>
					<li>Build multiple real-world projects: To-Do App, Blog Management System, Mini E-commerce System</li>
					<li>Learn Spring Boot for REST APIs, JPA, and Security</li>
					<li>Gain hands-on experience with microservices architecture, Spring Cloud, and Docker</li>
					<li>Emphasis on coding practice, problem-solving, and best industry practices</li>
				</ul>
				<p class="is-size-4 mb-4 has-text-weight-bold">Ideal for</p>
				<p class="mb-4">Aspiring backend developers, software engineers looking to strengthen Java and Spring Boot skills, and anyone aiming to become a full-stack developer with a strong backend foundation.
				</p>

				<p class="is-size-4 mb-4 has-text-weight-bold">Pre-requisites</p>
				<ul class="ml-2">
					<li>Basic understanding of programming concepts (variables, loops, functions).</li>
					<li>Familiarity with object-oriented concepts (classes, objects, inheritance).</li>
					<li>A computer with Java 11+ installed.</li>
					<li>IntelliJ IDEA or Eclipse (or another Java IDE) installed.</li>
					<li>Git installed and basic commands known (clone, commit, push, branch).</li>
					<li>Optional: Postman for testing APIs, MySQL or H2 database.</li>
				</ul>

				<p class="is-size-4 mb-4 has-text-weight-bold">Instructions</p>
				<p>Clone the repo <a href="https://github.com/ae-app-labs/java-spring-microservices" class="is-link" target="_blank">java-spring-microservices</a> and use it to save your work</p>
				<ul class="ml-2">
					<li>Organize the work by phase and service, e.g., phase1-java-fundamentals, phase2-blog-api, phase3-service-integration.</li>
					<li>Commit after completing each feature or milestone with clear messages like “Phase2: Blog CRUD operations” or “Phase3: Blog Service Feign integration.”</li>
					<li>Use feature branches for development and merge into main after testing.</li>
				</ul>
            </div>
		</div>
	</div>
</section>

<!-- Start Phase 1 Section -->
<section class="section" id="phase-1">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Phase 1: Java Fundamentals (Weeks 1–3)</p>
				<p>Goal: Cover 80% of Java essentials quickly with practice-oriented approach. We will build a Student Management System (Console App) by end of this phase.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 1: Java Basics + OOP</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>JVM, JDK, JRE, main syntax</li>
								<li>Data types, loops, conditionals</li>
								<li>Classes, Objects, Methods, Constructors</li>
								<li>OOP: Encapsulation, Inheritance, Polymorphism</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Simple Calculator</li>
								<li>Prime Number Checker</li>
								<li>Shape hierarchy (Circle, Rectangle etc) using interfaces</li>
							</ul>

							<p class="is-size-4 mb-4 has-text-weight-bold">Assignment</p>
							<ul>
								<li>Write a program to find factorial, Fibonacci series</li>
								<li>Implement a Zoo system with Animals using abstraction</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 2: Collections + Java 8 Features</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>List, Set, Map</li>
								<li>Generics</li>
								<li>Streams, Lambdas, Functional Interfaces</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Sort students by marks and names</li>
								<li>Implement a Phonebook using HashMap</li>
								<li>Student Management System with sorting & filtering using Streams</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 3: Exceptions + File I/O + Threads Intro</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Exception hierarchy, custom exceptions</li>
								<li>File reading/writing</li>
								<li>Intro to Threads + Executors</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Create a custom exception for invalid input</li>
								<li>File-based Banking system</li>
							</ul>

							<p class="is-size-4 mb-4 has-text-weight-bold">Mini Project</p>
							<ul>
								<li>Student Management System (Console App)</li>
								<ul>
									<li>CRUD operations (Add, Update, Delete, View students)</li>
									<li>File storage for persistence</li>
									<li>Use OOP principles, Collections, Exception Handling</li>
								</ul>
							</ul>
						</div>
					</div>
				</div>


			</div>
		</div>
	</div>
</section>
<!-- End Phase 1 Section -->

<!-- Start Phase 2 Section -->
<section class="section" id="phase-2">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Phase 2: Spring Boot + REST API (Weeks 4–8)</p>
				<p>Goal: Quickly move from REST basics → JPA → Security → Testing. Start to build a Blog Management System, feature by feature.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 4: Spring Boot Basics</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Inversion of Control (IoC), Spring Beans</li>
								<li>Auto Configuration</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Create a Hello World API as a Spring Boot Project</li>
								<li>Basic REST endpoints for posts (GET all, GET by id)</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 5: REST + CRUD + Postman</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>@RestController, RequestMapping, CRUD</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Add CRUD (Create, Update, Delete) for posts</li>
								<li>Use Postman for testing</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 6: Database Integration (JPA + Hibernate)</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Entities</li>
								<li>Repositories</li>
								<li>Relationships</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Connect Blog API to MySQL/H2 Database</li>
								<li>Implement Pagination, Sorting</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 7: Validation + Error Handling</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Bean Validation, @ControllerAdvice</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Add validation to Blog API</li>
								<li>Implement global exception handling</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 8: Security + JWT Intro</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Spring Security basics</li>
								<li>JWT concept</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Add User Authentication (Basic Auth or JWT intro)</li>
								<li>Role-based access (admin can delete posts)</li>
							</ul>

							<p class="is-size-4 mb-4 has-text-weight-bold">Mini Project</p>
							<ul>
								<li>Blog Management API (CRUD + Validation + DB + Security)</li>
								<ul>
									<li>Write simple unit tests for service layer</li>
								</ul>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Phase 2 Section -->


<!-- Start Phase 3 Section -->
<section class="section" id="phase-3">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Phase 3: Microservices (Weeks 9–12)</p>
				<p>Goal: Learn distributed architecture and deploy locally. We will extend the learning with an Order Management System as a microservices-based project.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 9: Microservices Basics</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Why microservices, Service Discovery (Eureka)</li>
								<li>Monolith vs. microservices vs. modular monolith.</li>
								<li>Service boundaries, communication methods (HTTP/REST, messaging basics).</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Split existing blog application into two services:</li>
								<li>Blog Service (handles blog posts)</li>
								<li>Auth/User Service</li>
								<ul>
									<li>Register user (username, email, password).</li>
									<li>Login and JWT token generation.</li>
									<li>Setup Spring Security in User Service.</li>
								</ul>
								<li>Configure different ports for each service (e.g., 8081 & 8082).</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 10: API Gateway + Communication</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Spring Cloud Gateway, Feign Client</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Add Gateway and inter-service call (Spring Cloud Gateway)</li>
								<li>Register with Service Discovery (Eureka)</li>
								<li>Configure Spring Security in Blog Service to validate JWT tokens issued by User Service.</li>
								<li>Implement an interceptor or filter in Blog Service for token validation.</li>
								<li>Restrict blog creation/edit/delete to authenticated users only.</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 11: Resilience & Observability</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Circuit Breaker (Resilience4j), Actuator</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Add Feign Client for communication (Order → Product)</li>
								<li>Implement circuit breaker in one service (Resilience4j)</li>
								<li>Enhance Blog Service:</li>
								<ul>
									<li>When listing blogs, show author username by fetching it from User Service.</li>
									<li>Implement a REST call from Blog Service → User Service to fetch user details.</li>
								</ul>
							</ul>
						</div>
					</div>
				</div>

				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Week 12: Final integration and Testing</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Microservice Integration Concepts</li>
								<li>Service Discovery with Eureka</li>
								<li>Declarative REST Calls with Feign</li>
								<li>JWT-Based Authentication Across Services</li>
								<li>Error Handling & Fallbacks</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Hands on Projects</p>
							<ul>
								<li>Set Up Eureka Server</li>
								<li>Implement Feign Client in Blog Service</li>
							</ul>

						</div>
					</div>
				</div>


			</div>
		</div>
	</div>
</section>
<!-- End Phase 3 Section -->


<!-- Start Final Project Section -->
<section class="section" id="final-project">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Final Project: Multi-Service Blog Platform</p>
				<p>	Build a fully functional backend application with User and Blog microservices, using Spring Boot, Feign, and Eureka. Implement JWT-based authentication, secure endpoints, and inter-service communication while handling service failures gracefully. By completing this project, you’ll demonstrate real-world backend development skills, modular architecture, and end-to-end testing.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Project Overview</p>
							<p>The final project is a realistic, multi-service backend application that demonstrates your ability to design, build, and integrate microservices. It consists of two independent services:</p>
							<ol>
								<li>User Service – Handles user registration, authentication (JWT), and role management.</li>
								<li>Blog Service – Manages blog posts, including creating, reading, updating, and deleting blogs. It communicates with User Service to validate users and fetch author information.</li>
							</ol>
							<p>Both services are registered with a local Eureka server for service discovery, and Feign clients are used for declarative inter-service communication. The project emphasizes security, resilience, and modular design</p>

							<p class="is-size-4 mb-4 has-text-weight-bold">Key Features to Implement</p>
							<ul>
								<li>User Service</li>
								<ul>
									<li>User registration and login with JWT.</li>
									<li>Role-based access (e.g., admin vs regular user).</li>
								</ul>
								<li>Blog Service</li>
								<ul>
									<li>CRUD operations for blogs.</li>
									<li>Secure endpoints that require JWT authentication.</li>
									<li>Fetch author information via Feign calls to User Service.</li>
									<li>Handle failures gracefully when User Service is unavailable (fallback).</li>
								</ul>
								<li>Integration</li>
								<ul>
									<li>Services discover each other via Eureka.</li>
									<li>JWT-based authentication across services.</li>
									<li>Proper logging and error handling.</li>
								</ul>
								<li>Testing</li>
								<ul>
									<li>Unit tests for service logic.</li>
									<li>Integration tests for inter-service communication.</li>
									<li>Manual end-to-end testing with Postman.</li>
								</ul>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Project Deliverables</p>
							<ol>
								<li>Source Code</li>
								<ul>
									<li>Well-organized repositories for each service.</li>
									<li>Proper commit history showing incremental development.</li>
								</ul>
								<li>Documentation</li>
								<ol>
									<li>README with setup instructions.</li>
									<li>API documentation for all endpoints.</li>
									<li>Description of how authentication, inter-service calls, and fallbacks work.</li>
								</ol>
								<li>Demonstration</li>
								<ul>
									<li>Run both services locally</li>
									<ol>
										<li>User registration & login.</li>
										<li>Creating, updating, and listing blogs with author info.</li>
										<li>Proper handling when a service is down.</li>
									</ol>
								</ul>
							</ol>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Final Project Section -->