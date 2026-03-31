"""
devops-scripts README file.
"""

import os

# Check if README file is being run as a standalone script
if __name__ == '__main__':
    # Print the project name and version
    print(f"Project Name: devops-scripts")
    print(f"Project Version: 1.0.0")
    print(f"Project Description: A collection of DevOps scripts.")

    # Check if the project root directory exists
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if not os.path.exists(project_root):
        print("Project root directory does not exist.")
    else:
        # Print the project root directory
        print(f"Project Root Directory: {project_root}")

    # Check if the scripts directory exists
    scripts_dir = os.path.join(project_root, 'scripts')
    if not os.path.exists(scripts_dir):
        print("Scripts directory does not exist.")
    else:
        # Print the scripts directory
        print(f"Scripts Directory: {scripts_dir}")