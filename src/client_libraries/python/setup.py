import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="microsoft_customerinsights",
    version="1.0.4",
    author="Microsoft Corp.",
    author_email="cihelp@microsoft.com",
    description="Client library for interacting with Customer Insights APIs",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://docs.microsoft.com/en-us/dynamics365/ai/customer-insights/pm-apis",
    packages=setuptools.find_packages(),
    classifiers=[
    ],
    python_requires='>=2.7',
)
