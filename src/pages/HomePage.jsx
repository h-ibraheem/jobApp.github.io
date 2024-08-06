import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards";
import JobListings from "../components/jobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = ()=>{
    return(
        <>
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
        </>
    )
}

export default HomePage;