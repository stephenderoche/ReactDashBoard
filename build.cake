#load "nuget:?package=Linedata.Cake.BakeACake&version=0.0.23";

Parameters.TemplateBuild=YarnAndDockerBuild;
Parameters.ProjectName="Linedata.Trading.Application";

Parameters.YarnBuildConf.Add(new YarnBuildConfig("./","build"));
Parameters.YarnBuildConf.Add(new YarnBuildConfig("./","test"));

Parameters.StageFiles=true;
Parameters.FilesToStage.Add(new FileToCopy("./build", $"./{Parameters.StageOutputDirectory}/Linedata.Trading.Application"));

Parameters.ZipModules.Add("Linedata.Trading.Application");
Parameters.DockerBuildConfigs.Add(new DockerConfig("Linedata.Trading.Application", 
         "./Docker/Dockerfile.Linedata.Trading.Application" ,
         $"./{Parameters.StageOutputDirectory}/Linedata.Trading.Application"));
Parameters.ContainerRegistryURL="docker-dev-local.ln1ampart01.ad.linedata.com/trading";

BakeACake();
