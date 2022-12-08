/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import java.util.UUID;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the enrichment entity info used in API requests (entity level).
 */
public class EntityEnrichmentInformation {
    /**
     * Gets a value indicating whether there is an enriched entity for the ds
     * entity.
     */
    @JsonProperty(value = "hasEnrichedEntity")
    private Boolean hasEnrichedEntity;

    /**
     * Name of the enriched entity.
     */
    @JsonProperty(value = "enrichedEntityName")
    private String enrichedEntityName;

    /**
     * Gets the list configured enrichments on the ds entity.
     */
    @JsonProperty(value = "configuredEnrichments")
    private List<UUID> configuredEnrichments;

    /**
     * Get gets a value indicating whether there is an enriched entity for the ds entity.
     *
     * @return the hasEnrichedEntity value
     */
    public Boolean hasEnrichedEntity() {
        return this.hasEnrichedEntity;
    }

    /**
     * Set gets a value indicating whether there is an enriched entity for the ds entity.
     *
     * @param hasEnrichedEntity the hasEnrichedEntity value to set
     * @return the EntityEnrichmentInformation object itself.
     */
    public EntityEnrichmentInformation withHasEnrichedEntity(Boolean hasEnrichedEntity) {
        this.hasEnrichedEntity = hasEnrichedEntity;
        return this;
    }

    /**
     * Get name of the enriched entity.
     *
     * @return the enrichedEntityName value
     */
    public String enrichedEntityName() {
        return this.enrichedEntityName;
    }

    /**
     * Set name of the enriched entity.
     *
     * @param enrichedEntityName the enrichedEntityName value to set
     * @return the EntityEnrichmentInformation object itself.
     */
    public EntityEnrichmentInformation withEnrichedEntityName(String enrichedEntityName) {
        this.enrichedEntityName = enrichedEntityName;
        return this;
    }

    /**
     * Get gets the list configured enrichments on the ds entity.
     *
     * @return the configuredEnrichments value
     */
    public List<UUID> configuredEnrichments() {
        return this.configuredEnrichments;
    }

    /**
     * Set gets the list configured enrichments on the ds entity.
     *
     * @param configuredEnrichments the configuredEnrichments value to set
     * @return the EntityEnrichmentInformation object itself.
     */
    public EntityEnrichmentInformation withConfiguredEnrichments(List<UUID> configuredEnrichments) {
        this.configuredEnrichments = configuredEnrichments;
        return this;
    }

}