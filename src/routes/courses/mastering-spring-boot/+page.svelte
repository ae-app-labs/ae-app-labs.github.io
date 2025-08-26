<script>
    import { fade } from 'svelte/transition'
</script>

<svelte:head>
	<title>ae app labs | Courses | Mastering Spring Boot</title>
</svelte:head>

<section class="section-header banner-bg" transition:fade|global>
	<div class="container py-6 fadeInUp">
        <p class="is-size-2 is-family-secondary">Mastering Spring Boot Course</p>
        <p class="is-size-4 stagger2 mt-4"><span class="tag is-primary">Development</span></p>
	</div>
</section>

<section class="section fadeInUp">
	<div class="container">
		<div class="columns">
			<div class="column is-4">
                <p><span class="has-text-weight-bold">Duration:</span> 5 Weeks</p>
            </div>
			<div class="column is-8">
                <p class="is-size-4 mb-4 has-text-weight-bold">Contents</p>
				<p class="mb-4">This 5 week course will take the learner up to speed with Spring Boot with intriduction to Spring Framework and a hands on project.</p>

				<ul class="mb-4 ml-2">
					<li>Week 1 - Introduction to Spring Framework</li>
                    <li>Week 2 - Spring Boot Basics</li>
                    <li>Week 3 - RESTful Services with Spring Boot</li>
                    <li>Week 4 - Advanced Spring Boot Concepts</li>
                    <li>Week 5 - Advanced Spring Boot Concepts</li>
                    <li>Project - Task Management System</li>
				</ul>

				<p class="is-size-4 mb-4 has-text-weight-bold">Pre-requisites</p>
				<ul class="ml-2">
					<li>Basic understanding of programming concepts (variables, loops, functions).</li>
					<li>Familiarity with object-oriented concepts (classes, objects, inheritance).</li>
					<li>A computer with Java 11+ installed.</li>
					<li>IntelliJ IDEA or Eclipse (or another Java IDE) installed.</li>
					<li>Git installed and basic commands known (clone, commit, push, branch).</li>
				</ul>

				<p class="is-size-4 mb-4 has-text-weight-bold">Instructions</p>
				<p>Will be Provided</p>
            </div>
		</div>
	</div>
</section>

<!-- Start Week 1 Section -->
<section class="section" id="week-1">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Week 1: Introduction to Spring Framework</p>
				<p>Goal: Learn the basics of Spring Framework and what led to the creation of Spring Boot.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Introduction to Java Spring</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Overview of Java Spring Framework.</li>
								<li>Dependency injection and Inversion of Control (IoC).</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Spring Core Concepts</p>
							<ul>
								<li>Understanding Beans and their lifecycle.</li>
								<li>Bean scopes and annotations.</li>
							</ul>

							<p class="is-size-4 mb-4 has-text-weight-bold">Introduction to Spring Boot</p>
							<ul>
								<li>Overview of Spring Boot and its advantages.</li>
								<li>Setting up a Spring Boot project.</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Week 1 Section -->

<!-- Start Week 2 Section -->
<section class="section" id="week-2">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Week 2: Spring Boot Basics</p>
				<p>Goal: Learn the basics of Spring Boot.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Spring Boot Configuration</p>
							<p class="is-size-4 mb-4 has-text-weight-bold">Topics</p>
							<ul>
								<li>Application properties and YAML configurations.</li>
								<li>Profiles in Spring Boot.</li>
							</ul>
							
							<p class="is-size-4 mb-4 has-text-weight-bold">Spring Boot MVC</p>
							<ul>
								<li>Building a simple MVC application.</li>
								<li>Understanding controllers, views, and models.</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Week 2 Section -->

<!-- Start Week 3 Section -->
<section class="section" id="week-3">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Week 3: RESTful Services with Spring Boot</p>
				<p>Goal: Learn RESTful web services with Spring Boot.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Introduction to RESTful Web Services</p>
							<ul>
								<li>REST principles and HTTP methods.</li>
								<li>Building RESTful services with Spring Boot.</li>
                                <li>Consuming RESTful services.</li>
                                <li>Handling exceptions and error messages.</li>
							</ul>
							
							<p class="is-size-4">Spring Boot Data with Spring Data JPA</p>
							<ul>
								<li>Introduction to Spring Data JPA.</li>
								<li>Connecting to databases and performing CRUD operations.</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Week 3 Section -->

<!-- Start Week 4 Section -->
<section class="section" id="week-4-5">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Week 4 &amp; 5: Advanced Spring Boot Concepts</p>
				<p>Goal: Learn advanced concepts</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Spring Boot Security</p>
							<ul>
								<li>Introduction to Spring Security.</li>
								<li>Securing a Spring Boot application.</li>
							</ul>
							
							<p class="is-size-4">Microservices with Spring Boot</p>
							<ul>
								<li>Overview of microservices architecture.</li>
								<li>Building microservices with Spring Boot.</li>
							</ul>

							<p class="is-size-4">Testing in Spring Boot</p>
							<ul>
								<li>Writing unit tests and integration tests.</li>
								<li>Using JUnit and Mockito.</li>
							</ul>

							<p class="is-size-4">Deployment and Monitoring</p>
							<ul>
								<li>Preparing a Spring Boot application for deployment.</li>
								<li>Introduction to monitoring tools.</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End Week 4-5 Section -->


<!-- Start final-project Section -->
<section class="section" id="final-project">
	<div class="container">
		<div class="columns">
			<div class="column is-6 is-offset-4">
				<p class="subtitle is-size-4">Final Project: Task Management System</p>
                <p>Goal: Apply the concepts learned in the course to build a complete Spring Boot application.</p>
				<div class="card is-shadowless is-slightly-rounded has-background-info mt-2">
					<div class="card-content">
						<div class="content">
							<p class="is-size-4">Objective</p>
							<p>Build a web-based task management system that allows users to create, update, and delete tasks. The system should provide features for organizing tasks, setting deadlines, and categorizing tasks.</p>
							
							<p class="is-size-4">Features</p>
							
                            Task CRUD Operations:
                            <ul>
                                <li>                                Users can create, view, update, and delete tasks.</li>
                                <li>Each task should have a title, description, deadline, and status.</li>
                            </ul>
                            Task Categories:
                            <ul>
                                <li>Tasks can be categorized into different types (e.g., work, personal, study).</li>
                                <li>Users can create, edit, and delete categories.</li>
                            </ul>
                            
                            Search and Filtering:
                            <ul><li>Allow users to search for tasks based on keywords, categories, or status.</li></ul>
                            RESTful API:
                            <ul>
                                <li>Implement a RESTful API for task management.</li>
                                <li>Include endpoints for CRUD operations on tasks and categories.</li>
                            </ul>
                                
                            
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<!-- End final-project Section -->