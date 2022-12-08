/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a Segment Stat.
 */
public class SegmentQueryStat {
    /**
     * Gets a list of Rowset Stat.
     */
    @JsonProperty(value = "rowsetStat")
    private List<SegmentRowsetStat> rowsetStat;

    /**
     * Get gets a list of Rowset Stat.
     *
     * @return the rowsetStat value
     */
    public List<SegmentRowsetStat> rowsetStat() {
        return this.rowsetStat;
    }

    /**
     * Set gets a list of Rowset Stat.
     *
     * @param rowsetStat the rowsetStat value to set
     * @return the SegmentQueryStat object itself.
     */
    public SegmentQueryStat withRowsetStat(List<SegmentRowsetStat> rowsetStat) {
        this.rowsetStat = rowsetStat;
        return this;
    }

}