-- Graveyard Field map generation for Roblox Tower Defense
-- Generates a 500x500 stud (approx ft) graveyard-themed play field
-- Run this in a Roblox Studio command bar or Script to spawn the map

local Terrain = workspace.Terrain
local Lighting = game:GetService("Lighting")

-- Base ground
local MAP_SIZE = Vector3.new(500, 1, 500)
local ground = Instance.new("Part")
ground.Name = "Ground"
ground.Size = MAP_SIZE
ground.Anchored = true
ground.Material = Enum.Material.Grass
ground.CFrame = CFrame.new(MAP_SIZE.X/2, -0.5, MAP_SIZE.Z/2)
ground.Parent = workspace

-- Lighting for spooky atmosphere
Lighting.Ambient = Color3.fromRGB(80, 80, 80)
Lighting.FogColor = Color3.fromRGB(60, 60, 60)
Lighting.FogEnd = 300

-- Path configuration
local PATH_WIDTH = 20
local pathPoints = {
    Vector3.new(50, 0, 450),
    Vector3.new(100, 0, 300),
    Vector3.new(200, 0, 200),
    Vector3.new(300, 0, 300),
    Vector3.new(400, 0, 150),
    Vector3.new(450, 0, 50)
}

-- Build path segments between points
for i = 1, #pathPoints - 1 do
    local p1 = pathPoints[i]
    local p2 = pathPoints[i+1]
    local diff = p2 - p1
    local length = diff.Magnitude
    local segment = Instance.new("Part")
    segment.Anchored = true
    segment.Material = Enum.Material.Cobblestone
    segment.Color = Color3.fromRGB(80, 80, 80)
    segment.Size = Vector3.new(PATH_WIDTH, 1, length)
    segment.CFrame = CFrame.new(p1 + diff/2, p2)
    segment.Parent = workspace
end

-- Helper to add a grave at a position
local function addGrave(pos)
    local base = Instance.new("Part")
    base.Size = Vector3.new(4, 1, 2)
    base.Material = Enum.Material.Slate
    base.Color = Color3.fromRGB(100, 100, 100)
    base.Anchored = true
    base.CFrame = CFrame.new(pos)
    base.Parent = workspace

    local headstone = Instance.new("Part")
    headstone.Size = Vector3.new(2, 3, 1)
    headstone.Material = Enum.Material.Concrete
    headstone.Color = Color3.fromRGB(130, 130, 130)
    headstone.Anchored = true
    headstone.CFrame = CFrame.new(pos + Vector3.new(0, 2, 0))
    headstone.Parent = workspace
end

-- Scatter graves around outer area, avoid path center
for i = 1, 60 do
    local x = math.random(20, 480)
    local z = math.random(20, 480)
    if (x < 80 or x > 420) or (z < 80 or z > 420) then
        addGrave(Vector3.new(x, 0, z))
    end
end

return {
    spawnPoint = pathPoints[1],
    exitPoint = pathPoints[#pathPoints],
}
